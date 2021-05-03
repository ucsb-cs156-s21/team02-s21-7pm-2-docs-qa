package edu.ucsb.cs156.spring.backenddemo.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@Api(description="Home Page with links to documentation")
@Slf4j
@RestController
@RequestMapping("/api")
public class HomeController {
    
    @ApiOperation(value = "Get general info about the server, including link to api documentation")
    @GetMapping(value={"","/"})
    public ResponseEntity<String> getHome() throws JsonProcessingException {
        log.info("Home Page accessed");
        
        String baseUrl = getBaseUrl();
        String body = getHomePageObjectJSON(baseUrl);

        return ResponseEntity.ok().body(body);
    }
    
    public static String getHomePageObjectJSON(String baseUrl) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();

        Map<String, Object> resultMap = new HashMap<String, Object>();
        resultMap.put("greeting","Greetings from Spring Boot");

        List<String> team = new ArrayList<String>();
        team.add("Andrew L.");
        team.add("Bryan T.");
        team.add("Calvin J.");
        team.add("Jacqui M.");
        team.add("Mara D.");
        team.add("Max L.");
        team.add("Phill C.");
        team.add("Wade V.");
        resultMap.put("team",team);
        resultMap.put("repo","https://github.com/ucsb-cs156-s21/STARTER-team02");
        resultMap.put("api-documentation", baseUrl + "swagger-ui/index.html");
        return mapper.writeValueAsString(resultMap);
    }

    public String getBaseUrl() {
        ServletUriComponentsBuilder builder = ServletUriComponentsBuilder.fromCurrentRequestUri();
        URI uri = builder.build().toUri();
        String path = uri.getRawPath();
        String baseUrl = uri.toString().replaceFirst(path,"/");
        return baseUrl;
    }

}
