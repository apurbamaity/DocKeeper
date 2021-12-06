package com.apurba.walkover.controller;

import java.awt.print.Printable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.apurba.walkover.model.document;
import com.apurba.walkover.model.member;
import com.apurba.walkover.model.team;
import com.apurba.walkover.model.teamandmember;
import com.apurba.walkover.repository.ducumentRepository;
import com.apurba.walkover.repository.memberRepository;
import com.apurba.walkover.repository.teamRepository;
import com.apurba.walkover.repository.teamandmemberRepository;

import ch.qos.logback.core.read.ListAppender;



@RestController
public class getAllMembers {
	
	@Autowired
	public teamRepository teamrepo;
	
	@Autowired
	public memberRepository memrepo;
	
	@Autowired
	public ducumentRepository docrepo;
	
	@Autowired
	public teamandmemberRepository tandmrepo;
	
	
	
	@GetMapping("/getallmembers/{teamid}")
	public List<member> getallmembers(@PathVariable Map<String, String> pathVarsMap){
		String teamid =  pathVarsMap.get("teamid");
		
		/*List<member> list = new ArrayList<member>();
		
		team t = teamrepo.findByteamid(teamid);
		System.out.println(t.getTeammember());
		
		String[] arr = t.getTeammember().split(",");
		Arrays.stream(arr).forEach(o -> print(o , list));*/
		
		List<teamandmember> tandm = tandmrepo.findByteamid(teamid);
		
		List<member> memberlist = new ArrayList<member>(); 
		
		tandm.stream().forEach( o -> add(memberlist , o));
		
		
		return memberlist;
		
	}
	
	
	private void add(List<member> memberlist, teamandmember o) {
		
		memberlist.add( memrepo.findByuserid(o.getMemberid()));
		return;
	}


	@GetMapping("/getteamname/{teamid}")
	public String getteamname(@PathVariable Map<String, String> pathVarsMap) {
		String teamid =  pathVarsMap.get("teamid");
		team t = teamrepo.findByteamid(teamid);
		return t.getTeamname();
		
	}
	
	@GetMapping("/getrelevantdocs/{search}/{teamid}")
	public List<document> getrelevantdocs(@PathVariable Map<String, String> pathVarsMap) {
		
		
		String search =  pathVarsMap.get("search");
		String teamid =  pathVarsMap.get("teamid");
		
		System.out.println(teamid+"--"+search);
		
		List<document> list= docrepo.findByteamname(teamid);
		
		System.out.println(list);
		
		List<document> retList = new ArrayList<document>();
		
		list.stream().forEach( o -> retriveList(o , retList , search) );
		
		return retList;
		
	}



	private void retriveList(document o, List<document> retList, String search) {
		
		if ( o.getName()!=null && o.getName().toLowerCase().contains(search.toLowerCase()) ) {
			retList.add(o);
		}
	}


	private void print(String o, List<member> list) {
		member member = memrepo.findByid(Integer.valueOf(o));
		list.add(member);
	}
	
	

}
