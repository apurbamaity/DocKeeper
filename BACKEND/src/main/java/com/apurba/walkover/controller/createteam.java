package com.apurba.walkover.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apurba.walkover.model.member;
import com.apurba.walkover.model.team;
import com.apurba.walkover.model.teamandmember;
import com.apurba.walkover.repository.memberRepository;
import com.apurba.walkover.repository.teamRepository;
import com.apurba.walkover.repository.teamandmemberRepository;

import java.util.concurrent.ThreadLocalRandom;

@RestController
public class createteam {
	
	@Autowired
	public teamRepository teamrepo;
	
	@Autowired
	public memberRepository memrepo;
	
	@Autowired
	public teamandmemberRepository tandmemrepo;
	
	@GetMapping("/create/{teamname}/{userid}")
	public int createnewteam(@PathVariable Map<String, String> pathVarsMap) {
		
		
		String teamname = pathVarsMap.get("teamname"); 
		String userid = pathVarsMap.get("userid"); 
		
		String sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		
		//member m = memrepo.findByuserid(pathVarsMap.get("userid"));
		
		String teamid = "";
		for(int i=0;i<16;i++) {
			int randomNum = ThreadLocalRandom.current().nextInt(0, sample.length());
			teamid = teamid + sample.charAt(randomNum);
		}
		
		team team = new team(); 
		team.setTeamname(teamname);
		team.setTeamid(teamid);
		team.setAdmin(userid);
		teamrepo.save(team);
		
		teamandmember tandm = new teamandmember();
		tandm.setTeamid(teamid);
		tandm.setMemberid(userid);
		tandm.setTeamname(teamname);
		tandmemrepo.save(tandm);
		
		/*m.setTeamlist( m.getTeamlist()+ String.valueOf(team.getId())+","    );
		memrepo.save(m);*/
		
		
		
		
		return 123;
		
	}

	
	
	@GetMapping("/getallteam/{userid}")
	public List<teamandmember> getall(@PathVariable Map<String, String> pathVarsMap){
		
		String userid = pathVarsMap.get("userid"); 
		/*member m = memrepo.findByuserid(userid);
		//System.out.println(m.getTeamlist());
		
		if(m.getTeamlist() == "") {
			//System.out.println("here1");
			return null;
		}else {
			String[] teams = m.getTeamlist().split(",");
			List<team> teamlist = new ArrayList<team>();
			for(String string : teams) {
				team team = (com.apurba.walkover.model.team) teamrepo.findByid(Integer.valueOf(string));
				teamlist.add(team );
			}
			//teamlist.add(teamrepo.findByid(1));
			System.out.println("here2");
			return teamlist;
		}*/
		
		return tandmemrepo.findBymemberid(userid);
		
	}
	
	
	@GetMapping("/join/{teamname}/{userid}")
	public int join(@PathVariable Map<String, String> pathVarsMap){
		
		
		
		String userid = pathVarsMap.get("userid"); 
		String teamname =  pathVarsMap.get("teamname");
		
		System.out.println(teamname);
		
		
		/*team tm = teamrepo.findByteamid(teamname);
		member m = memrepo.findByuserid(userid);
		
		if(tm == null) {
			return 403;
		}
		
		int res = m.getTeamlist().indexOf(String.valueOf(tm.getId()) );
		if(res >= 0) {
			return 402;
		}
		
		
		
		m.setTeamlist( m.getTeamlist()+ String.valueOf(tm.getId())+","    );
		memrepo.save(m);
		
		
		
		tm.setTeammember( tm.getTeammember() + String.valueOf(m.getId()) + ","  );
		teamrepo.save(tm);
		
		return 205;*/
		
		teamandmember tandm = new teamandmember();
		tandm.setMemberid(userid);
		tandm.setTeamid(teamname);
		tandm.setTeamname( teamrepo.findByteamid(teamname).getTeamname() );
		tandmemrepo.save(tandm);
		return 205;
		
	}
	
	
	
}
