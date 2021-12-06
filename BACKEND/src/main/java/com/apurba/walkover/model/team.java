package com.apurba.walkover.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="team")
public class team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String teamid;
	private String teammember;
	private String teamname;
	private String admin;

	public String getAdmin() {
		return admin;
	}

	public void setAdmin(String admin) {
		this.admin = admin;
	}

	@Transient
	private List<member> memebrs;
	
	
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

	public String getTeammember() {
		return teammember;
	}

	public List<member> getMemebrs() {
		return memebrs;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setTeamid(String teamid) {
		this.teamid = teamid;
	}

	public void setTeammember(String teammember) {
		this.teammember = teammember;
	}

	public void setMemebrs(List<member> memebrs) {
		this.memebrs = memebrs;
	}
	
	

}
