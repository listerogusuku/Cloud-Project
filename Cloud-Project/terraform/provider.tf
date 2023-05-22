terraform {
    required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 4.21.0"
        }
    # Aqui dentro poderíamos também ter estabelecido outras restrições
    # de versão, mas optei por deixar o mais simples possível.
    }

required_version = "~> 1.0"
}

provider "aws" {
    region = "us-east-1" # Região Northern Virginia
}