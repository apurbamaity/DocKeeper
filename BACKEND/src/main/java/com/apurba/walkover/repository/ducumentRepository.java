package com.apurba.walkover.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apurba.walkover.model.document;


public interface ducumentRepository extends JpaRepository<document, Integer> {
	
	document findById(int x);

	List<document> findByteamname(String string);

}
