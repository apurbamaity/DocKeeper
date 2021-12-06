package com.apurba.walkover;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.apurba.walkover.model.member;
import com.apurba.walkover.repository.memberRepository;

@SpringBootTest
class WalkoverApplicationTests {
	
	
	@Autowired
	memberRepository repo;

	@Test
	void contextLoads() {
		member m = new member();
		m.setUserid("hello");
		m.setPassword("password");
		m.setTeamlist("1,2,3,4");
		m.setUsername("apurba");
		m.setConpass("1234");
		repo.save(m);
	}

}
