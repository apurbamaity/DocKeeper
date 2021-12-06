package com.apurba.walkover.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.apurba.walkover.repository.ducumentRepository;
import com.apurba.walkover.repository.memberRepository;

@RestController
public class deletechatController {
	
	@Autowired
	private ducumentRepository docrepo;
	
	@Autowired
	private memberRepository memrepo;
	
	@GetMapping("/deletechat/{chatid}/{whotring}")
	public int deletechat(@PathVariable Map<String, String> pathVarsMap) {
		int chatid = Integer.valueOf(pathVarsMap.get("chatid"));
		String whotring = pathVarsMap.get("whotring");
		
		if( memrepo.findByuserid(whotring).getUsername().equals( docrepo.findById(chatid).getUsername() ) == true   ) {
			docrepo.deleteById(chatid);
			return 200;
		}else {
			return 400;
		}
		
	}

}
