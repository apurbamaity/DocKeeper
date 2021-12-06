package com.apurba.walkover.controller;

import java.util.Map;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.apurba.walkover.model.member;
import com.apurba.walkover.repository.memberRepository;

@RestController
public class getsingleuserdetailsController {
	
	@Autowired
	private memberRepository memrepo;
	
	@GetMapping("/getsingleuserdetails/{userid}")
	public member getsingleuserdetails(@PathVariable Map<String, String> pathVarsMap) {
		
		String userid = pathVarsMap.get("userid");
		return memrepo.findByuserid(userid);
	}

}
