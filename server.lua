-- server.lua

-- Ladebildschirm anzeigen
AddEventHandler('onClientMapStart', function()
    TriggerClientEvent('showLoadingScreen', -1)
end)