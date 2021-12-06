package com.apurba.walkover.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.apurba.walkover.model.document;
import com.apurba.walkover.model.team;
import com.apurba.walkover.model.teamandmember;


public interface teamandmemberRepository extends JpaRepository<teamandmember, Integer> {

	List<teamandmember> findBymemberid(String userid);

	List<teamandmember> findByteamid(String teamid);
	
	@Transactional
	@Modifying
	void deleteByTeamidAndMemberid(String cid , String pid);

}
