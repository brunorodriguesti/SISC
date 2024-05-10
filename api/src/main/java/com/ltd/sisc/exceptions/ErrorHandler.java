package com.ltd.sisc.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity tratarError404(){
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity tratarError400(MethodArgumentNotValidException ex){
        var errors = ex.getFieldErrors().stream().map(DadosErrorValidacao::new).toList();
        return ResponseEntity.badRequest().body(errors);
    }

    private record DadosErrorValidacao(String campo,String mensagem){
        public DadosErrorValidacao(FieldError error) {
            this(error.getField(),error.getDefaultMessage());
        }
    }
}
