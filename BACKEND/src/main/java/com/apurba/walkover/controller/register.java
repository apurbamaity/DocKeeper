package com.apurba.walkover.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apurba.walkover.model.member;
import com.apurba.walkover.repository.memberRepository;

@RestController
public class register {
	
	@Autowired
	public memberRepository memrepo;
	
	@PostMapping("/register")
	public int registerNow(@RequestBody member member) {
		
		//System.out.print(member.toString());
		try {
			member m = memrepo.findByuserid(member.getUserid());
			if(m== null) {
				member.setTeamlist("");
				memrepo.save(member);
				return 202;
			}else {
				return 405;
			}
		}catch(Exception e) {
			return 405;
		}
		
		
		
	}
	
	@GetMapping("/")
	public String home() {
		return "walkover";
		
	}
	
	@PostMapping("/signin")
	public int signin(@RequestBody member member) {
		
		
		member m = memrepo.findByuserid(member.getUserid());
		if(m==null) {
			return 401;
		}else if(m.getPassword().equals(member.getPassword())) {
			return m.getId();
		}else {
			return 402;
		}
	}
	
	
	

}
