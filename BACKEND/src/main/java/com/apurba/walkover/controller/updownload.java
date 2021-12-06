package com.apurba.walkover.controller;

import java.io.IOException;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.apurba.walkover.model.document;
import com.apurba.walkover.repository.ducumentRepository;
import com.apurba.walkover.repository.memberRepository;
import com.apurba.walkover.repository.teamRepository;
import com.sun.istack.NotNull;

@RestController
//@RequestMapping("/api/files")
public class updownload {
	
	@Autowired
	private ducumentRepository fileEntityRepository;
	
	@Autowired
	private memberRepository memrepo;
	
	
	@PostMapping("/files/{send}")
	
	
	  public ResponseEntity<Void> uploadNewFile(@NotNull @RequestParam("file") MultipartFile multipartFile , @PathVariable Map<String, String> pathVarsMap) throws IOException {

		System.out.println("hereerre");
		
		
		String msg = pathVarsMap.get("send"); 
		 String[] arr = msg.split("&&");
		 
		
		System.out.println(msg);
		Date date = new Date();  
	    SimpleDateFormat formatter = new SimpleDateFormat("dd MMMM yyyy");  
	    String strDate = formatter.format(date);  
		
		if(multipartFile.getOriginalFilename() != null) {
			document fileEntity = new document(multipartFile.getOriginalFilename(), multipartFile.getContentType(),
				      multipartFile.getBytes());
				    
				    System.out.println(multipartFile.getContentType());
				    System.out.println(multipartFile.getOriginalFilename());
				    fileEntity.setMsg(arr[2]);
				    fileEntity.setTeamname(arr[0]);
				    fileEntity.setUsername( memrepo.findByuserid(arr[1]).getUsername() );
				    //fileEntity.setLike(0);
				    
				    
				    
				    //System.out.println("Date Format with dd MMMM yyyy : "+strDate); 
				    fileEntity.setTime(strDate);
				    
				    
				    
				    fileEntityRepository.save(fileEntity);

				    URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
				    return ResponseEntity.created(location).build();
		}else {
			document fileEntity = new document(); 
			fileEntity.setMsg(arr[0]);
		    fileEntity.setTeamname(arr[1]);
		    fileEntity.setUsername( memrepo.findByuserid(arr[2]).getUsername() );
		    
		    fileEntity.setTime(strDate);
		    
		    
		    fileEntityRepository.save(fileEntity);
		    URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
		    return ResponseEntity.created(location).build();
		    
		}
		
		
	    

	 }
	
	@GetMapping("/files1/{send}")
	
	
	  public int upload( @PathVariable Map<String, String> pathVarsMap) throws IOException {

		System.out.println("hereerre");
		
		Date date = new Date();  
	    SimpleDateFormat formatter = new SimpleDateFormat("dd MMMM yyyy");  
	    String strDate = formatter.format(date);  
		
		
		String msg = pathVarsMap.get("send"); 
		String[] arr = msg.split("&&");
		
		System.out.println(msg);
		
		
			document fileEntity = new document(); 
			fileEntity.setMsg(arr[2]);
		    fileEntity.setTeamname(arr[0]);
		    fileEntity.setUsername( memrepo.findByuserid(arr[1]).getUsername() );
		    fileEntity.setTime(strDate);
		    fileEntityRepository.save(fileEntity);
		    return 205;
		
		
	    

	 }
	
	
	@GetMapping("/getallchats/{teamid}")
	public List<document> getallchats(@PathVariable Map<String, String> pathVarsMap){
		List<document> nList = fileEntityRepository.findByteamname( pathVarsMap.get("teamid") );
		 Collections.reverse(nList);
		return nList;
		
	}
	
	
	@GetMapping("/api/files/{id}")
	
	  public ResponseEntity<byte[]> getRandomFile(@PathVariable Map<String, String> pathVarsMap) {

	    long amountOfFiles = fileEntityRepository.count();
	    int randomPrimaryKey = Integer.valueOf(pathVarsMap.get("id"));;

	    

	    document fileEntity = fileEntityRepository.findById(randomPrimaryKey);
	    
	    ContentDisposition contentDisposition = ContentDisposition.builder("inline")
	            .filename("Filename")
	            .build();

	    HttpHeaders header = new HttpHeaders();

	    /*header.setContentType(MediaType.valueOf(fileEntity.getImgdata()));
	    header.setContentLength(fileEntity.getContent().length);
	    header.set("Content-Disposition", "attachment; filename=" + fileEntity.getName());*/
	    
	    header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="+fileEntity.getName());
	    header.add(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, HttpHeaders.CONTENT_DISPOSITION);
	    
	    //header.setContentDisposition(contentDisposition);

	    return new ResponseEntity<>(fileEntity.getContent(), header, HttpStatus.OK);
	  }
}
