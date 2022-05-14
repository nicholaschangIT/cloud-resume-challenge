resource "azurerm_resource_group" "functionapp" {
  name     = "example-resources"
  location = "West Europe"
}

resource "azurerm_storage_account" "functionapp" {
  name                     = "linuxfunctionappsa"
  resource_group_name      = azurerm_resource_group.functionapp.name
  location                 = azurerm_resource_group.functionapp.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_service_plan" "functionapp" {
  name                = "example-app-service-plan"
  resource_group_name = azurerm_resource_group.functionapp.name
  location            = azurerm_resource_group.functionapp.location
  os_type             = "Linux"
  sku_name            = "Y1"
}

resource "azurerm_linux_function_app" "functionapp" {
  name                = "example-linux-function-app"
  resource_group_name = azurerm_resource_group.functionapp.name
  location            = azurerm_resource_group.functionapp.location

  storage_account_name = azurerm_storage_account.functionapp.name
  service_plan_id      = azurerm_service_plan.functionapp.id

  site_config {}
  
}