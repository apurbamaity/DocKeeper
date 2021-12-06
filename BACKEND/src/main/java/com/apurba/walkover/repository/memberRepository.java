package com.apurba.walkover.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apurba.walkover.model.member;

public interface memberRepository extends JpaRepository<member, Integer> {

	member findByuserid(String userid);
	member findByid(Integer i);


}
