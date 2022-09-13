<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

//Incluir a conexao
include_once 'conn.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if($dados){

    $query_produto = "INSERT INTO meus_sites (nome, segmento, modalidade, dominio) VALUES (:nome, :segmento, :modalidade, :dominio)";
    $cad_produto = $conn->prepare($query_produto);

    $cad_produto->bindParam(':nome', $dados['produto']['nome'], PDO::PARAM_STR);
    $cad_produto->bindParam(':segmento', $dados['produto']['segmento'], PDO::PARAM_STR);
    $cad_produto->bindParam(':modalidade', $dados['produto']['modalidade'], PDO::PARAM_STR);
    $cad_produto->bindParam(':dominio', $dados['produto']['dominio'], PDO::PARAM_STR);
    $cad_produto->execute();

    if($cad_produto->rowCount()){
        $response = [
            "erro" => false,
            "messagem" => "Site cadastrado com sucesso!"
        ];
    }else{
        $response = [
            "erro" => true,
            "messagem" => "Não foi possível cadastrar o site."
        ];
    }
    
    
}else{
    $response = [
        "erro" => true,
        "messagem" => "Não foi possível cadastrar esse site, entre em contato com nosso suporte."
    ];
}

http_response_code(200);
echo json_encode($response);