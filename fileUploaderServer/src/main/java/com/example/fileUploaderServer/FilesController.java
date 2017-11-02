package com.example.fileUploaderServer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("files")
public class FilesController {

    @GetMapping()
    public String get() {
        return "this is a file  ";
    }
}
