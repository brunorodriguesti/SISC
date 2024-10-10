package com.ltd.sisc.services;

import com.ltd.sisc.dto.EnderecoDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(value = "enderecoService", url = "https://viacep.com.br/ws")
public interface EnderecoServiceInterface {
    @RequestMapping(method = RequestMethod.GET, value = "/{cep}/json/", produces = "application/json")
    EnderecoDTO getEndereco(@PathVariable("cep") String cep);
}
