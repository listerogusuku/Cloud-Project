# :cloud: **AWS SERVELESS APPLICATION S3, LAMBDA, API GATEWAY E CLOUDWATCH**

<!-- - **Aluno:** Lister Ogusuku Ribeiro
- **Curso:** Engenharia de Computação
- **Semestre:** 6º
- **Contato:** listeror@al.insper.edu.br
- **Ano:** 2023 -->

<div align="center" style="max-width:300rem;">
<table>
<tr>
<th>Sobre o Desenvolvedor</th>
<th>Github</th>
</tr>
<tr>
<td>
<pre>
Aluno: Lister Ogusuku Ribeiro
Contato: listeror@al.insper.edu.br
Curso: Engenharia de Computação
Disciplina: Computação em Nuvem
Semestre: 6º (2023.1)
Profº: Rodolfo Avelino
Profº Auxiliar: Tiago Demay
</pre>
</td>
<td>

<div align="center" style="max-width:200rem;">
<table>
  <tr>
   <td align="center"><a href="https://github.com/listerogusuku"><img style="border-radius: 80%;" src="https://avatars.githubusercontent.com/listerogusuku" width="60px;" alt=""/><br /><sub><b>Lister Ogusuku</b></sub></a><br /><a href="https://github.com/listerogusuku" title="Lister Ogusuku Ribeiro"></a>Developer</td>

  </tr>
</table>
</div>

</td>
</tr>
</table>

</div>

<!--

## Começando

Para seguir esse tutorial é necessário: -->

<!--
- **Hardware:** DE10-Standard e acessórios
- **Softwares:** Quartus 18.01
- **Documentos:** [DE10-Standard_User_manual.pdf](https://github.com/Insper/DE10-Standard-v.1.3.0-SystemCD/tree/master/Manual) -->

<!-- ## :man: Desenvolvedor

<div align="center" style="max-width:68rem;">
<table>
  <tr>
   <td align="center"><a href="https://github.com/listerogusuku"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/listerogusuku" width="100px;" alt=""/><br /><sub><b>Lister Ogusuku</b></sub></a><br /><a href="https://github.com/listerogusuku" title="Lister Ogusuku Ribeiro"></a>Developer</td>

  </tr>
</table>
</div> -->

## :globe_with_meridians: Cloud Computing (Computação em Nuvem)

> A computação em nuvem é um modelo de tecnologia de informação que permite o acesso sob demanda a um conjunto compartilhado de recursos de computação, como servidores, armazenamento, aplicativos e serviços, por meio da internet. Em outras palavras, a computação em nuvem é uma **_forma de disponibilizar recursos computacionais através da internet, em vez de ter todos os recursos armazenados localmente em um único computador ou servidor._** Esses recursos são gerenciados e mantidos por provedores de serviços em nuvem, como a **_Amazon Web Services, Microsoft Azure e Google Cloud Platform._**
>
> A computação em nuvem pode ser utilizada para diversas finalidades, como **_armazenar arquivos e documentos, hospedar aplicativos, desenvolver e testar software, processar dados em larga escala, entre outras._** A principal vantagem da computação em nuvem é que ela permite que as empresas e usuários finais utilizem recursos computacionais de forma flexível e escalável, sem precisar investir em infraestrutura de TI própria. Além disso, a computação em nuvem oferece maior disponibilidade e segurança de dados do que soluções locais, já que os provedores de serviços em nuvem costumam ter data centers redundantes e medidas de segurança avançadas para proteger os dados dos usuários.

## :pencil: Sobre o Projeto

O Projeto a seguir visa aplicar conceitos de Computação em Nuvem (Cloud Computing) por meio da AWS (Amazon Web Services). A ideia é subir uma aplicação sem servidor utilizando o **S3, Lambda, API Gateway e o CloudWatch.**

## Desenvolvendo a infraestrutura

### 1. Instalação do Terraform

![Terraform image](https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg)

A primeira etapa para desenvolvermos essa aplicação é instalar o Terraform na máquina. O Terraform é uma ferramenta de gerenciamento de infraestrutura como código (IaC) desenvolvida pela HashiCorp. Ele permite que os usuários definam, configurem e provisionem infraestruturas de forma automatizada e reprodutível, usando uma linguagem declarativa e uma sintaxe simples.
Com o Terraform, é possível criar e gerenciar recursos em diferentes provedores de nuvem, como AWS, Google Cloud, Azure e outros, bem como em plataformas de infraestrutura, como Kubernetes, Docker e OpenStack.
Em resumo, o Terraform é uma ferramenta importante para automatizar e gerenciar infraestruturas de nuvem e outras plataformas de infraestrutura, tornando a gestão de infraestrutura escalável, segura e repetível.

Caso você não possua o Terraform no seu computador, é necessário baixar e instalar de acordo com o tutorial presente [neste link](https://www.youtube.com/watch?v=bSrV1Dr8py8).

### 2. Utilização

Após a instalação do Terraform na máquina, já é possível rodar a infraestrutura desenvolvida.

O primeiro passo é clonar este repositório em uma pasta dentro do seu computador. _Caso não saiba como clonar um repositório na sua máquina local, acesse o tutorial presente [neste link](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) ou faça o download do respositório e descompacte o arquivo .zip no local desejado._

---

<!-- !!! info
Essas duas partes são obrigatórias no tutorial:

    - Nome de vocês
    - Começando
    - Motivação -->

## Criando uma função Lambda no Terraform

O primeiro passo será criarmos uma função lambda que, futuramente, será integrada com o AWS API Gateway.
Inicialmente, começaremos com uma função simples sem nenhuma dependência.

<!--
!!! note
Bloco de destaque de texto, pode ser:

    - note, example, warning, info, tip, danger

!!! example "Faça assim"
É possível editar o título desses blocos

    !!! warning
        Isso também é possível de ser feito, mas
        use com parcimonia.

??? info
Também da para esconder o texto, usar para coisas
muito grandes, ou exemplos de códigos.

    ```txt
    ...




    oi!
    ```

- **Esse é um texto em destaque**
- ==Pode fazer isso também==

Usar emojis da lista:

:two_hearts: - https://github.com/caiyongji/emoji-list -->

=== "**index.js**"

```js
exports.handler = async (event) => {
  console.log("Event: ", event);
  let responseMessage = "Hello, World!";

  if (event.queryStringParameters && event.queryStringParameters["Name"]) {
    responseMessage = "Hello, " + event.queryStringParameters["Name"] + "!";
  }

  return response;
};
```

Ao invocar essa função com uma consulta de URL e com o parâmetro Name definido, ela retornará "Hello, Name!".

=== "**index.js**"

```js
exports.handler = async (event) => {
  console.log("Event: ", event);
  let responseMessage = "Hello, World!";

  if (event.queryStringParameters && event.queryStringParameters["Name"]) {
    responseMessage = "Hello, " + event.queryStringParameters["Name"] + "!";
  }

  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    responseMessage = "Hello, " + body.name + "!";
  }

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };

  return response;
};
```

Também será verificado o método **HTTP GET e POST** para que seja verificada a resposta padrão. Foi especificado o **código de status '200',
tipo de conteúdo e a mensagem** para ser retornada ao chamador.

## Criando o provider

Agora que nossa handler já está pronta, começaremos a trabalhar em alguns elementos do nosso Terraform.
Criaremos os arquivos **_.tf_** dentro de uma pasta intitulada (por motivos intuitivos, claro) como "terraform".

Começaremos criando o arquivo "provider.tf", em que serão declaradas as restrições de versão para os diferentes provedores AWS e afins.

=== "**terraform/provider.tf**"

```tf
terraform {
    required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 4.21.0"
    }
    //random = {
    //    source = "hashicorp/random"
    //    version = "~> 3.3.0"
    //    }
    //archive = {
    //    source = "hashicorp/archive"
    //    version = "~> 2.2.0"
    //    }
    }

required_version = "~> 1.0"
}

provider "aws" {
    region = "us-east-1"
}
```

## Bucket do S3

Agora nós construiremos uma função com todas as dependências, empacotaremos como um arquivo **_zip_** para que, assim,
consigamos subir num bucket do S3. Ou seja, quando criamos o lambda, apontamos para esse objeto de arquvo zip no bucket S3.

Como os nomes dos buckets do S3 devem ser **únicos e exclusivos** no mundo inteiro, podemos utilizar um gerador aleatório para
nos ajudar a nomear nosso bucket S3.

=== "**terraform/lambda-bucket.tf**"

```tf
resource "random_pet" "lambda_bucket_name" {
prefix = "lambda"
length = 2
}

```

Em seguida, vamos criar o próprio bucket do S3 com o nome gerado.

=== "**terraform/lambda-bucket.tf**"

```tf

resource "random_pet" "lambda_bucket_name" {
  prefix = "lambda"
  length = 2
}

+resource "aws_s3_bucket" "lambda_bucket" {
+  bucket        = random_pet.lambda_bucket_name.id
+  force_destroy = true
+}


```

Por padrão, deixaremos todo o acesso público bloqueado.

=== "**terraform/lambda-bucket.tf**"

```tf

resource "random_pet" "lambda_bucket_name" {
  prefix = "lambda"
  length = 2
}

resource "aws_s3_bucket" "lambda_bucket" {
  bucket        = random_pet.lambda_bucket_name.id
  force_destroy = true
}

+resource "aws_s3_bucket_public_access_block" "lambda_bucket" {
+  bucket = aws_s3_bucket.lambda_bucket.id

+  block_public_acls       = true
+  block_public_policy     = true
+  ignore_public_acls      = true
+  restrict_public_buckets = true
+}

```

## IAM e Policies

Agora criaremos o código Terraform do lambda. Lembrando que o lambda exigirá acesso a outros serviços da AWS (como o CloudWatch, para gravar logs) e, no nosso caso, concederemos acesso ao bucket do S3 para que seja possível a leitura de um arquivo.

Para isso, precisamos criar uma função do IAM e permitir que o lambda a use.

=== "**terraform/hello-lambda.tf**"

```tf

resource "aws_iam_role" "hello_lambda_exec" {
  name = "hello-lambda"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "hello_lambda_policy" {
  role       = aws_iam_role.hello_lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

```

## Criando uma função Lambda

O próximo recurso será criar a função lambda, a qual chamaremos de "hello". Em seguida especificaremos o nome do intervalo onde
armazenaremos todos os lambdas. E nosso key pointing irá apontar para um arquivo zip com uma função.

O hash do código-fonte foi adicionado para reimplementar a função caso seja alterado/atualizado algo no código-fonte.
Se o hash do arquivo zip for diferente, a reimplantação do lambda será forçada.

=== "**terraform/hello-lambda.tf**"

```tf

resource "aws_iam_role" "hello_lambda_exec" {
  name = "hello-lambda"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "hello_lambda_policy" {
  role       = aws_iam_role.hello_lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

+resource "aws_lambda_function" "hello" {
+  function_name = "hello"

+  s3_bucket = aws_s3_bucket.lambda_bucket.id
+  s3_key    = aws_s3_object.lambda_hello.key

+  runtime = "nodejs16.x"
+  handler = "function.handler"

+  source_code_hash = data.archive_file.lambda_hello.output_base64sha256

+  role = aws_iam_role.hello_lambda_exec.arn
+}

```

## Criando CloudWatch

Para depurar, criamos um grupo de logs do CloudWatch que conseguisse armazenar todas as instruções e erros do console.log na função.
Definimos a retenção para 30 dias, porém poderia ser uma quantidade maior ou menor também, a depender das intenções de quem está
desenvolvendo a infraestrutura (além dessas decisões poderem afetar o custo de execução do lambda).

=== "**terraform/hello-lambda.tf**"

```tf
resource "aws_iam_role" "hello_lambda_exec" {
  name = "hello-lambda"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "hello_lambda_policy" {
  role       = aws_iam_role.hello_lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "hello" {
  function_name = "hello"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key    = aws_s3_object.lambda_hello.key

  runtime = "nodejs16.x"
  handler = "function.handler"

  source_code_hash = data.archive_file.lambda_hello.output_base64sha256

  role = aws_iam_role.hello_lambda_exec.arn
}

+resource "aws_cloudwatch_log_group" "hello" {
+  name = "/aws/lambda/${aws_lambda_function.hello.function_name}"

+  retention_in_days = 30
+}

```

Em seguida, adicionaremos o recurso que empacota o lambda como um arquivo zip.

=== "**terraform/hello-lambda.tf**"

```tf
resource "aws_iam_role" "hello_lambda_exec" {
  name = "hello-lambda"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "hello_lambda_policy" {
  role       = aws_iam_role.hello_lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "hello" {
  function_name = "hello"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key    = aws_s3_object.lambda_hello.key

  runtime = "nodejs16.x"
  handler = "function.handler"

  source_code_hash = data.archive_file.lambda_hello.output_base64sha256

  role = aws_iam_role.hello_lambda_exec.arn
}

resource "aws_cloudwatch_log_group" "hello" {
  name = "/aws/lambda/${aws_lambda_function.hello.function_name}"

  retention_in_days = 14
}

+data "archive_file" "lambda_hello" {
+  type = "zip"

+  source_dir  = "../${path.module}/hello"
+  output_path = "../${path.module}/hello.zip"
+}

```

Nosso último componente visa obter o arquivo zip e carregar no bucket do S3.

=== "**terraform/hello-lambda.tf**"

```tf
resource "aws_iam_role" "hello_lambda_exec" {
  name = "hello-lambda"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "hello_lambda_policy" {
  role       = aws_iam_role.hello_lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "hello" {
  function_name = "hello"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key    = aws_s3_object.lambda_hello.key

  runtime = "nodejs16.x"
  handler = "function.handler"

  source_code_hash = data.archive_file.lambda_hello.output_base64sha256

  role = aws_iam_role.hello_lambda_exec.arn
}

resource "aws_cloudwatch_log_group" "hello" {
  name = "/aws/lambda/${aws_lambda_function.hello.function_name}"

  retention_in_days = 30
}

data "archive_file" "lambda_hello" {
  type = "zip"

  source_dir  = "../${path.module}/hello"
  output_path = "../${path.module}/hello.zip"
}

+resource "aws_s3_object" "lambda_hello" {
+  bucket = aws_s3_bucket.lambda_bucket.id

+  key    = "hello.zip"
+  source = data.archive_file.lambda_hello.output_path

+  etag = filemd5(data.archive_file.lambda_hello.output_path)
+}

```

## Inicializando o Terraform

Com os passos feitos até aqui já conseguimos inicializar o terraform e aplicar suas alterações.

```tf
terraform init
terraform apply
```

> :warning: **Dica visual**

> Quando o terraform concluir suas etapas até aqui, podemos entrar no dashboard da AWS e encontrar um bucket S3 recém-criado com um nome definido por meio de um gerador de animais de estimação aleatório.

---

**Para abstrair:**

Note que dentro do bucket são armazenadas funções lambdas dentro de um **zip.**

Quando entramos na dashboard da **AWS CloudWatch** também conseguimos ver o grupo de logs criado.

No dashboard do AWS Lambda conseguimos ver a função lambda empacotada como um zip.

---

Como ainda não temos o API Gateway, conseguimos invocar a função com o comando aws lambda invoke.

Lembre-se de especificar ou conferir se o nome da região, função e arquivo estão corretos pra registrar a resposta da função.

```tf
aws lambda invoke --region=us-east-1 --function-name=hello response.json
```

Ao printarmos a resposta, é esperado um retorno "Hello, World!"

```tf
cat response.json
```

## Criando o API Gateway

A próxima estapa será criar o API Gateway e integrá-lo ao nosso lambda.

Utilizaremos a versão 2 do API Gateway.

=== "**terraform/api-gateway.tf**"

```tf
resource "aws_apigatewayv2_api" "main" {
  name          = "main"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "dev" {
  api_id = aws_apigatewayv2_api.main.id

  name        = "dev"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.main_api_gw.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

resource "aws_cloudwatch_log_group" "main_api_gw" {
  name = "/aws/api-gw/${aws_apigatewayv2_api.main.name}"

  retention_in_days = 30
}

```

## Integrando o API Gateway com o Lambda

No próximo arquivo Terraform, integraremos o API Gateway com o hello lambda. Primeiramente apontaremos para o ID do API Gateway que acabamos de criar. Em seguida utilizaremos PROXYS AWS e solicitações POST para encaminhar solicitações do API Gateway para o Lambda

=== "**terraform/hello-api-gateway.tf**"

```tf
resource "aws_apigatewayv2_integration" "lambda_hello" {
api_id = aws_apigatewayv2_api.main.id

integration_uri = aws_lambda_function.hello.invoke_arn
integration_type = "AWS_PROXY"
integration_method = "POST"
}

```

Podemos especificar qual tipo de solicitações queremos passar para o lambda, por exemplo: GET ou POST, como abaixo:

=== "**terraform/hello-api-gateway.tf**"

```tf
resource "aws_apigatewayv2_integration" "lambda_hello" {
api_id = aws_apigatewayv2_api.main.id

integration_uri = aws_lambda_function.hello.invoke_arn
integration_type = "AWS_PROXY"
integration_method = "POST"
}

+resource "aws_apigatewayv2_route" "get_hello" {
+api_id = aws_apigatewayv2_api.main.id

+route_key = "GET /hello"
+target = "integrations/${aws_apigatewayv2_integration.lambda_hello.id}"
+}

+resource "aws_apigatewayv2_route" "post_hello" {
+api_id = aws_apigatewayv2_api.main.id

+route_key = "POST /hello"
+target = "integrations/${aws_apigatewayv2_integration.lambda_hello.id}"
+}

```

Note que em ambos os exemplos é necessário especificar um destino para ser o nosso lambda.
Também precisamos conceder permissões ao API Gateway para invocar nossa função lambda:

=== "**terraform/hello-api-gateway.tf**"

```tf
resource "aws_apigatewayv2_integration" "lambda_hello" {
  api_id = aws_apigatewayv2_api.main.id

  integration_uri    = aws_lambda_function.hello.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "get_hello" {
  api_id = aws_apigatewayv2_api.main.id

  route_key = "GET /hello"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_hello.id}"
}

resource "aws_apigatewayv2_route" "post_hello" {
  api_id = aws_apigatewayv2_api.main.id

  route_key = "POST /hello"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_hello.id}"
}

+resource "aws_lambda_permission" "api_gw" {
+  statement_id  = "AllowExecutionFromAPIGateway"
+  action        = "lambda:InvokeFunction"
+  function_name = aws_lambda_function.hello.function_name
+  principal     = "apigateway.amazonaws.com"

+  source_arn = "${aws_apigatewayv2_api.main.execution_arn}/*/*"
+}

```

## Invocando o Lambda

Por fim, vamos imprimir no console o URL que podemos usar para invocar o lambda.

=== "**terraform/hello-api-gateway.tf**"

```tf
resource "aws_apigatewayv2_integration" "lambda_hello" {
  api_id = aws_apigatewayv2_api.main.id

  integration_uri    = aws_lambda_function.hello.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "get_hello" {
  api_id = aws_apigatewayv2_api.main.id

  route_key = "GET /hello"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_hello.id}"
}

resource "aws_apigatewayv2_route" "post_hello" {
  api_id = aws_apigatewayv2_api.main.id

  route_key = "POST /hello"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_hello.id}"
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.hello.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.main.execution_arn}/*/*"
}

+output "hello_base_url" {
+  value = aws_apigatewayv2_stage.dev.invoke_url
+}

```

No terminal, daremos um apply no teraform.

```tf
terraform apply
```

> :warning: **Dica visual**

> _Se entrarmos no dashboard do **API Gateway**, podemos ver nosso estágio de desenvolvimento "dev" criado e, em "rotas", conseguimos encontrar os métodos ***GET e POST.***_

## Hora de testar

Vamos agora testar o método HTTP GET.
A função deve analisá-lo e retornar a mensagem "Olá, + parâmetro de URL"

```tf
curl "https://<id>.execute-api.us-east-1.amazonaws.com/dev/hello?Name=Anton"
```

Também testaremos o método POST. Nesse caso, fornecemos um payload como um objeto json para o terminal e veremos que funciona tmbém.

```tf
curl -X POST \
-H "Content-Type: application/json" \
-d '{"name":"Anton"}' \
"https://<id>.execute-api.us-east-1.amazonaws.com/dev/hello"

```

> _Se entrarmos no dashboard do **CloudWatch**, conseguiremos ver os logs de acesso registrados para cada solicitação._

<!-- === "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

Inserir vídeo:

- Abra o youtube :arrow_right: clique com botão direito no vídeo :arrow_right: copia código de incorporação:

<iframe width="630" height="450" src="https://www.youtube.com/embed/UIGsSLCoIhM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

!!! tip
Eu ajusto o tamanho do vídeo `width`/`height` para não ficar gigante na página

Imagens você insere como em plain markdown, mas tem a vantagem de poder mudar as dimensões com o marcador `{width=...}`

![](icon-elementos.png)

![](icon-elementos.png){width=200} -->
