Do
    Set wshshell = WScript.CreateObject("WScript.Shell")
    Wshshell.Run "Notepad"
    WScript.Sleep 100  '

    Dim message
    message = "We have your Facebook Credentials."


    For i = 1 To Len(message)
        Wshshell.SendKeys Mid(message, i, 1)
        WScript.Sleep 1  
    Next
Loop
