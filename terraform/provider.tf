terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.2.0"
    }

    }
  }
  
provider "azurerm" {
  features {}
}

terraform {
    backend "azurerm" {
      resource_group_name = "terraform-learning"   
      storage_account_name = "saterraformdevops"
      container_name = "terraformdemo"
      key            = "cloudskills.terraform.tfstate"
    }
}