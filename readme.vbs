Do
    Set wshshell = WScript.CreateObject("WScript.Shell")
    Wshshell.Run "Notepad"
    WScript.Sleep 1000  '

    Dim message
    message = "We have your Facebook Credentials."


    For i = 1 To Len(message)
        Wshshell.SendKeys Mid(message, i, 1)
        WScript.Sleep 10  
    Next
Loop
