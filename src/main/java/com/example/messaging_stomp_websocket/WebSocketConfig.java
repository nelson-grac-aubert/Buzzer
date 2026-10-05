package com.example.messaging_stomp_websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration // Spring Configuration annotation 
@EnableWebSocketMessageBroker // enable WebSocket message handling, backed by a message broker 

// Broker : object that receives, routes and delivers messages between STOMP clients based on 
// destination routes like /topic/ or /queue/ 
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override 
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic"); // enable a simple memory-based broker to carry the message 
                                             // back to the client on destination prefixed by /topic
        config.setApplicationDestinationPrefixes("/app"); // designate the prefix for messages bound to @MessageMapping annotated methods
                                                        // GreetingController.greet is then mapped to /app/hello 
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/gs-guide-websocket"); // register the /gs-guide-websocket endpoint for websocket connection 
    }
}
