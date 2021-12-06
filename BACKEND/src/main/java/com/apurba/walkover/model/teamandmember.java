package com.apurba.walkover.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class teamandmember {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String teamid;
	private String memberid;
	private String teamname;
	
	
	public String getTeamname() {
		return teamname;
	}
	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	public int getId() {
		return id;
	}
	public String getTeamid() {
		return teamid;
	}
	public String getMemberid() {
		return memberid;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setTeamid(String teamid) {
		this.teamid = teamid;
	}
	public void setMemberid(String userid) {
		this.memberid = userid;
	}
	
	

}
