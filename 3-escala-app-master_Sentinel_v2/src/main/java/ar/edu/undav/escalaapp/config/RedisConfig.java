package ar.edu.undav.escalaapp.config;
import io.lettuce.core.sentinel.api.StatefulRedisSentinelConnection;
import io.lettuce.core.sentinel.api.sync.RedisSentinelCommands;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@Configuration
@EnableRedisRepositories
public class RedisConfig {
    @Bean
    RedisTemplate redisTemplate(){
        RedisTemplate redisTemplate=new RedisTemplate();
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        return redisTemplate;
    }

    //Anterior sin Sentinel (funciona):

    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(new RedisStandaloneConfiguration("redis-master_V2", 6379));
    }

/*
    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
        RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
                .master("undavmaster")
                .sentinel("127.0.0.1", 26379);
        return new LettuceConnectionFactory(sentinelConfig);
    }
    */
}

//Ejemplo original con Sentinel:
    /*
    @Bean
    public RedisConnectionFactory lettuceConnectionFactory() {
      RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
      .master("undavmaster")
      .sentinel("127.0.0.1", 26579)
      .sentinel("127.0.0.1", 26580);
      return new LettuceConnectionFactory(sentinelConfig);
    }
    */