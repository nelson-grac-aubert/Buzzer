package com.example.messaging_stomp_websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {
    
    @MessageMapping("/hello") // ensure that if a message is sent to /hello destination, greeting() is called
    @SendTo("topic/greeting") // return value is broadcast to all subscribers of /topic/greeting
    public Greeting greeting(HelloMessage message) throws Exception { 
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello" + HtmlUtils.htmlEscape(message.getName()) + "!");
    }
}
