<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//Incluir a conexao
include_once 'conn.php';

$query_produtos = "SELECT id, nome, segmento, modalidade, dominio FROM meus_sites ORDER BY id DESC";
$result_produtos = $conn->prepare($query_produtos);
$result_produtos->execute();

if(($result_produtos) AND ($result_produtos->rowCount() != 0)){
    while($row_produto = $result_produtos->fetch(PDO::FETCH_ASSOC)){
        extract($row_produto);

        $lista_produtos["records"][$id] = [
            'id' => $id,
            'nome' => $nome,
            'segmento' => $segmento,
            'modalidade' => $modalidade,
            'dominio' => $dominio
        ];
    }

    //Resposta com status 200
    http_response_code(200);

    //Retornar os produtos em formato json
    echo json_encode($lista_produtos);
}