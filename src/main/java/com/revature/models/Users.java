package com.revature.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Users {

    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String description;
    private String artist1;
    private String artist2;
    private String artist3;
    private String artist4;
    private String artist5;
    private String artist6;
    
    
	public Users() {
		super();
	}


	public Users(String firstName, String lastName, String description, String artist1, String artist2, String artist3,
			String artist4, String artist5, String artist6) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.description = description;
		this.artist1 = artist1;
		this.artist2 = artist2;
		this.artist3 = artist3;
		this.artist4 = artist4;
		this.artist5 = artist5;
		this.artist6 = artist6;
	}


	public Users(String email, String firstName, String lastName, String description, String artist1, String artist2,
			String artist3, String artist4, String artist5, String artist6) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.description = description;
		this.artist1 = artist1;
		this.artist2 = artist2;
		this.artist3 = artist3;
		this.artist4 = artist4;
		this.artist5 = artist5;
		this.artist6 = artist6;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getArtist1() {
		return artist1;
	}


	public void setArtist1(String artist1) {
		this.artist1 = artist1;
	}


	public String getArtist2() {
		return artist2;
	}


	public void setArtist2(String artist2) {
		this.artist2 = artist2;
	}


	public String getArtist3() {
		return artist3;
	}


	public void setArtist3(String artist3) {
		this.artist3 = artist3;
	}


	public String getArtist4() {
		return artist4;
	}


	public void setArtist4(String artist4) {
		this.artist4 = artist4;
	}


	public String getArtist5() {
		return artist5;
	}


	public void setArtist5(String artist5) {
		this.artist5 = artist5;
	}


	public String getArtist6() {
		return artist6;
	}


	public void setArtist6(String artist6) {
		this.artist6 = artist6;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((artist1 == null) ? 0 : artist1.hashCode());
		result = prime * result + ((artist2 == null) ? 0 : artist2.hashCode());
		result = prime * result + ((artist3 == null) ? 0 : artist3.hashCode());
		result = prime * result + ((artist4 == null) ? 0 : artist4.hashCode());
		result = prime * result + ((artist5 == null) ? 0 : artist5.hashCode());
		result = prime * result + ((artist6 == null) ? 0 : artist6.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Users other = (Users) obj;
		if (artist1 == null) {
			if (other.artist1 != null)
				return false;
		} else if (!artist1.equals(other.artist1))
			return false;
		if (artist2 == null) {
			if (other.artist2 != null)
				return false;
		} else if (!artist2.equals(other.artist2))
			return false;
		if (artist3 == null) {
			if (other.artist3 != null)
				return false;
		} else if (!artist3.equals(other.artist3))
			return false;
		if (artist4 == null) {
			if (other.artist4 != null)
				return false;
		} else if (!artist4.equals(other.artist4))
			return false;
		if (artist5 == null) {
			if (other.artist5 != null)
				return false;
		} else if (!artist5.equals(other.artist5))
			return false;
		if (artist6 == null) {
			if (other.artist6 != null)
				return false;
		} else if (!artist6.equals(other.artist6))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Users [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName + ", description="
				+ description + ", artist1=" + artist1 + ", artist2=" + artist2 + ", artist3=" + artist3 + ", artist4="
				+ artist4 + ", artist5=" + artist5 + ", artist6=" + artist6 + "]";
	}
	
	


}	