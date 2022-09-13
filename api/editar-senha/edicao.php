<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

//Incluir a conexao
include_once './conn.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if($dados){
    $query_pass = "UPDATE login SET senha=:senha WHERE id=:id";
    $edit_pass = $conn->prepare($query_produto);

    $edit_pass->bindParam(':senha', $dados['senha'], PDO::PARAM_STR);
    $edit_pass->bindParam(':id', $dados['id'], PDO::PARAM_INT);

    $edit_pass->execute();

    if($edit_pass->rowCount()){
        $response = [
            "erro" => false,
            "mensagem" => "Senha editada com sucesso!"
        ];
    }else{
        $response = [
            "erro" => false,
            "mensagem" => "A senha não foi editada"
        ];
    }
}else{
    $response = [
        "erro" => false,
        "mensagem" => "A senha não pode ser editada"
    ];
}

http_response_code(200);
echo json_encode($response);