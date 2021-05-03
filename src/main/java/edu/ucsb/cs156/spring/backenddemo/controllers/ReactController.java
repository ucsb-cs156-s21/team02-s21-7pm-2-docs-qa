package edu.ucsb.cs156.spring.backenddemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {
  @GetMapping(value = {"/", "/{x:^(?!v2/api-docs$)[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}"})

  public String getIndex() {
    return "/index.html";
  }
}
