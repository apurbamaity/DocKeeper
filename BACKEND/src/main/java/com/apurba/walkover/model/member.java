package com.apurba.walkover.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="member")
public class member {
	
	@Override
	public String toString() {
		return "member [id=" + id + ", username=" + username + ", userid=" + userid + ", password=" + password
				+ ", conpass=" + conpass + "]";
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String username;
	
	private String userid;
	private String teamlist;
	private String password;
	private String conpass;
	
	
	@Transient
	private List<team> teams;


	public int getId() {
		return id;
	}


	public String getUsername() {
		return username;
	}


	public String getUserid() {
		return userid;
	}


	public String getTeamlist() {
		return teamlist;
	}


	public String getPassword() {
		return password;
	}


	public String getConpass() {
		return conpass;
	}


	public List<team> getTeams() {
		return teams;
	}


	public void setId(int id) {
		this.id = id;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public void setUserid(String userid) {
		this.userid = userid;
	}


	public void setTeamlist(String teamlist) {
		this.teamlist = teamlist;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public void setConpass(String conpass) {
		this.conpass = conpass;
	}


	public void setTeams(List<team> teams) {
		this.teams = teams;
	}

	
	
	
	
	

}
