package performance

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.springframework.http.HttpStatus

import scala.concurrent.duration._

class BasicScript extends Simulation {

    val httpProtocol = http
      .baseUrl("http://localhost:8080/only-resource") // Root for all relative URLs
      .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Common headers
      .acceptEncodingHeader("gzip, deflate")
      .acceptLanguageHeader("en-US,en;q=0.5")
      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

    val scn = scenario("Friendly and CLosed Scenario")
      .exec(http("request_1")
        .get("/1").check(status.is(HttpStatus.OK.value())))
      .pause(10)
      .exec(http("request_2")
        .get("/0").check(status.is(HttpStatus.OK.value())))

    val scn2 = scenario("Not Friendly and Open Scenario")
      .exec(http("request_1")
        .get("/1").check(status.is(HttpStatus.OK.value())))
      .pause(10)
      .exec(http("request_2")
        .get("/0").check(status.is(HttpStatus.OK.value())))

  //NO (Ver porque) - Sequential scenarios:
  //setUp(scn.inject(atOnceUsers(100))
  // .andThen(scn2.inject(atOnceUsers(200)))
  // ).protocols(httpProtocol)

  //SI - Concurrent scenarios:
  //setUp(scn.inject(atOnceUsers(100)),
  // scn2.inject(atOnceUsers(200))
  // ).protocols(httpProtocol)

  //Setup of the 2 Concurrent Scenarios (Not Sequencial):
    setUp(
          scn.inject(atOnceUsers(100)),       //Friendly.
          scn2.inject(                        //Not Friendly.
                  //nothingFor(4 seconds),                                    // Pause for 4 sec.
                  atOnceUsers(10),                                            // Injects 10 users at once.
                  rampUsers(10) during (10 seconds),                          // Injects 10 users distributed evenly on a time window of 10 sec. of duration.
                  constantUsersPerSec(5) during (10 seconds),                 // constantUsersPerSec(rate) during(duration): Injects users at a constant rate, defined in users per second, during a given duration. Users will be injected at regular intervals.
                  //constantUsersPerSec(10) during (10 seconds) randomized,   // constantUsersPerSec(rate) during(duration) randomized: Injects users at a constant rate, defined in users per second, during a given duration. Users will be injected at randomized intervals.
                  rampUsersPerSec(5) to 20 during (10 seconds),               // rampUsersPerSec(rate1) to (rate2) during(duration): Injects users from starting rate to target rate, defined in users per second, during a given duration. Users will be injected at regular intervals.
                  //rampUsersPerSec(10) to 20 during (10 seconds) randomized, // rampUsersPerSec(rate1) to(rate2) during(duration) randomized: Injects users from starting rate to target rate, defined in users per second, during a given duration. Users will be injected at randomized intervals.
                  heavisideUsers(10) during (10 seconds)                      // heavisideUsers(nbUsers) during(duration): Injects a given number of users following a smooth approximation of the heaviside step function stretched to a given duration.
          )
    ).protocols(httpProtocol)
}
