package com.example.fileUploaderServer;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

@RestController
@RequestMapping("files")
public class FilesController {

    @GetMapping()
    public HashMap<String, String> get() {
        HashMap<String, String> map = new HashMap<>();
        map.put("greeting", "hello");
        return map;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void savePhoto(@RequestParam("image") MultipartFile file) {
        if (!file.isEmpty()) {
            System.out.println("inside file = " + file);
        }
    }

    @GetMapping("/photo")
    public byte[] getPhoto() throws IOException, URISyntaxException {
        Path path = Paths.get(getClass().getClassLoader().getResource("kitten.jpg").toURI());
        byte[] bytes = Files.readAllBytes(path);
        return bytes;
    }
}
