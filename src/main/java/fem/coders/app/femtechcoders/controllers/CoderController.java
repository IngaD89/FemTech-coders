package fem.coders.app.femtechcoders.controllers;


import fem.coders.app.femtechcoders.exceptions.ResourceNotFoundException;
import fem.coders.app.femtechcoders.models.Coder;
import fem.coders.app.femtechcoders.repositories.CoderRepository;
import fem.coders.app.femtechcoders.services.CoderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CoderController {

    private CoderService coderService;
    private CoderRepository coderRepository;

    @Autowired
    public CoderController(CoderService coderService, CoderRepository coderRepository) {
        this.coderService = coderService;
        this.coderRepository = coderRepository;
    }

    @GetMapping("/coders")
    public List<Coder> allCoders() {
        return coderRepository.findAll();
    }

    @PostMapping("/coders/add")
    public Coder addCoder(@RequestBody Coder coder) {
        return coderRepository.save(coder);
    }

    @GetMapping("/coders{id}")
    public Coder findById(@PathVariable Long id) {
            return coderRepository.findById(id).orElse(null);
    }

    @PutMapping("/coders/{id}")
    public ResponseEntity<Coder> edit(@PathVariable Long id) throws ResourceNotFoundException {
        Coder coder = coderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Coder not found"));
        coderRepository.save(coder);
        return ResponseEntity.ok().body(coder);
    }

    @DeleteMapping("/coders/{id}")
    public ResponseEntity<Coder> delete(@PathVariable Long id) throws ResourceNotFoundException {
        Coder coder = coderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Coder not found"));
        coderRepository.deleteById(id);
        return ResponseEntity.ok().body(coder);
    }
}