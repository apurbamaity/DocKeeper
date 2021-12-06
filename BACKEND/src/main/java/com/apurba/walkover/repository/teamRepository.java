package com.apurba.walkover.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apurba.walkover.model.team;

public interface teamRepository extends JpaRepository<team, Integer> {

		team findByid(int id);

		team findByteamid(String teamname);
}
