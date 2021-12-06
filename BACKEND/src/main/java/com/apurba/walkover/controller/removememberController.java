package com.apurba.walkover.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.apurba.walkover.model.member;
import com.apurba.walkover.model.team;
import com.apurba.walkover.repository.memberRepository;
import com.apurba.walkover.repository.teamRepository;
import com.apurba.walkover.repository.teamandmemberRepository;

@RestController
public class removememberController {
	
	@Autowired
	private teamRepository teamrepo;
	
	@Autowired
	private memberRepository memrepo;
	
	@Autowired
	private teamandmemberRepository tandmrepo;

		
	@GetMapping("/removemember/{teamid}/{memberid}/{whotrying}")
	public int removemember(@PathVariable Map<String, String> pathVarsMap) {
		
		String teamid = pathVarsMap.get("teamid");
		String memberid = pathVarsMap.get("memberid");
		String whotrying = pathVarsMap.get("whotrying");
		int memberidint = Integer.valueOf(memberid);
		
		/*member whotring = memrepo.findByuserid(whotrying);
		
		
		
		team team = teamrepo.findByteamid(teamid);
		
		if(  String.valueOf(whotring.getId()) .equals( team.getTeammember().split(",")[0] )  == false) {
			return 400;
		}
		
		
		System.out.println(teamid);
		
		member member = memrepo.findByid(memberidint); 
		team.setTeammember(team.getTeammember().replace( (memberid+",") , ""    ));
		member.setTeamlist( member.getTeamlist().replace(  (String.valueOf(team.getId()) +",") , ""   )       );
		teamrepo.save(team);
		memrepo.save(member);
		return  200;*/
		
		if(whotrying.equals( teamrepo.findByteamid(teamid).getAdmin())  == true   ) {
			tandmrepo.deleteByTeamidAndMemberid(teamid, memrepo.findByid(memberidint).getUserid() );
			return 200;
		}else {
			return 400;
		}
		
		
		
		
	}
}
