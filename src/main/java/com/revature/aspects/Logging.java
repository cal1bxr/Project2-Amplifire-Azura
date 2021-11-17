package com.revature.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


@Aspect
@Component
public class Logging {

    private static Logger log = LoggerFactory.getLogger(Logging.class);

    @Before("within(com.revature.services.*)")
    public void logServiceMethods(JoinPoint joinPoint) {
        log.warn(joinPoint.getTarget() + " invoked " + joinPoint.getSignature() + " with param " + joinPoint.getArgs());
    }

    @AfterReturning(pointcut="execution(* findByEmail(..))", returning=
            "returnedObject")
    public void logSearchByUsername(JoinPoint joinPoint,
                                    Object returnedObject) {
        log.warn(joinPoint.getTarget() + " invoked " + joinPoint.getSignature() + " and returned "+returnedObject.toString());
    }

    @AfterThrowing(pointcut="execution(* findByEmail(String))", throwing=
            "exception")
    public void logUsernameException(JoinPoint joinPoint, Exception exception) {
        log.warn(joinPoint.getTarget() + " invoked " + joinPoint.getSignature() + " and threw " + exception.getMessage());
    }

    @AfterReturning(pointcut="execution(* findByFavoriteEmail(..))", returning=
            "returnedObject")
    public void logSearchBySongName(JoinPoint joinPoint,
                                    Object returnedObject) {
        log.warn(joinPoint.getTarget() + " invoked " + joinPoint.getSignature() + " and returned "+returnedObject.toString());
    }

    @AfterThrowing(pointcut="execution(* findByFavoriteEmail(String))", throwing=
            "exception")
    public void logSongNameException(JoinPoint joinPoint, Exception exception) {
        log.warn(joinPoint.getTarget() + " invoked " + joinPoint.getSignature() + " and threw " + exception.getMessage());
    }
}
