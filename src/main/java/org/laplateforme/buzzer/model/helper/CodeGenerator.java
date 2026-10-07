package org.laplateforme.buzzer.model.helper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class CodeGenerator {
    static List<Map<String, Integer>> rnd = List.of(
            Map.of(
                    "Lower", 65,
                    "Upper", 90
            ),
            Map.of(
                    "Lower", 97,
                    "Upper", 122
            )
    );

    static Random random = new Random();

    public static String generateCode(){
        StringBuilder sb = new StringBuilder();

        while(sb.length() < 5){
            int idx = random.nextInt(0, rnd.size());
            int randomChar  = random.nextInt(rnd.get(idx).get("Lower"), rnd.get(idx).get("Upper"));
            sb.append((char)randomChar);
        }

       return sb.toString();
    }
}
