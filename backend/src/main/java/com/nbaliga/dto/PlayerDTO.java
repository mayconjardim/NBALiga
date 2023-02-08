package com.nbaliga.dto;

import com.nbaliga.entities.Player;
import com.nbaliga.entities.SeasonStats;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PlayerDTO implements Serializable {

    private Long id;
    private String firstName;
    private String lastName;
    private String name;
    private Integer height;
    private Integer weight;
    private Integer age;
    private Integer birthMonth;
    private Integer birthDay;
    private Integer birthYear;
    private String currentLeague;
    private Integer currentLeagueId;
    private String currentTeam;
    private Integer currentTeamId;
    private String contractTeam;
    private Integer contractTeamId;
    private String injury;
    private Integer timeInjured;
    private Boolean inactive;
    private Integer positionNumber;
    private Integer experience;
    private String college;
    private String city;
    private String state;
    private Integer greed;
    private Integer happiness;
    private Integer loyalty;
    private Integer winner;
    private Integer insideScoring;
    private Integer jumpShot;
    private Integer freeThrowShot;
    private Integer threePointShot;
    private Integer handling;
    private Integer passing;
    private Integer offensiveRebounding;
    private Integer defensiveRebounding;
    private Integer postDefense;
    private Integer perimeterDefense;
    private Integer stealing;
    private Integer shotBlocking;
    private Integer quickness;
    private Integer strength;
    private Integer stamina;
    private Integer jumping;
    private String pot_inside;
    private String pot_jumpShot;
    private String pot_freeThrow;
    private String pot_3pShot;
    private String pot_handling;
    private String pot_passing;
    private String pot_oRebounding;
    private String pot_dRebounding;
    private String pot_postDefense;
    private String pot_perimeterDefense;
    private String pot_stealing;
    private String pot_blocking;
    private String currentRating;
    private String futureRating;
    private String overallRating;
    private String overallPotential;
    private Integer championships;
    private Integer playerOfGame;
    private Integer playerOfWeek;
    private Integer playerOfMonth;
    private Integer contract1;
    private Integer contract2;
    private Integer contract3;
    private Integer contract4;
    private Integer contract5;
    private Integer birdYears;

    private List<SeasonStatsDTO> seasonStats = new ArrayList<>();

    private List<PlayerAwardsDTO> awards = new ArrayList<>();

    public PlayerDTO(Player entity) {
        this.id = entity.getId();
        this.firstName = entity.getFirstName();
        this.lastName = entity.getLastName();
        this.name = entity.getName();
        this.height = entity.getHeight();
        this.weight = entity.getWeight();
        this.age = entity.getAge();
        this.birthMonth = entity.getBirthMonth();
        this.birthDay = entity.getBirthDay();
        this.birthYear = entity.getBirthYear();
        this.currentLeague = entity.getCurrentLeague();
        this.currentLeagueId = entity.getCurrentLeagueId();
        this.currentTeam = entity.getCurrentTeam();
        this.currentTeamId = entity.getCurrentTeamId();
        this.contractTeam = entity.getContractTeam();
        this.contractTeamId = entity.getContractTeamId();
        this.injury = entity.getInjury();
        this.timeInjured = entity.getTimeInjured();
        this.inactive = entity.getInactive();
        this.positionNumber = entity.getPositionNumber();
        this.experience = entity.getExperience();
        this.college = entity.getCollege();
        this.city = entity.getCity();
        this.state = entity.getState();
        this.greed = entity.getGreed();
        this.happiness = entity.getHappiness();
        this.loyalty = entity.getLoyalty();
        this.winner = entity.getWinner();
        this.insideScoring = entity.getInsideScoring();
        this.jumpShot = entity.getJumpShot();
        this.freeThrowShot = entity.getFreeThrowShot();
        this.threePointShot = entity.getThreePointShot();
        this.handling = entity.getHandling();
        this.passing = entity.getPassing();
        this.offensiveRebounding = entity.getOffensiveRebounding();
        this.defensiveRebounding = entity.getDefensiveRebounding();
        this.postDefense = entity.getPostDefense();
        this.perimeterDefense = entity.getPerimeterDefense();
        this.stealing = entity.getStealing();
        this.shotBlocking = entity.getShotBlocking();
        this.quickness = entity.getQuickness();
        this.strength = entity.getStrength();
        this.stamina = entity.getStamina();
        this.jumping = entity.getJumping();
        this.pot_inside = entity.getPot_inside();
        this.pot_jumpShot = entity.getPot_jumpShot();
        this.pot_freeThrow = entity.getPot_freeThrow();
        this.pot_3pShot = entity.getPot_3pShot();
        this.pot_handling = entity.getPot_handling();
        this.pot_passing = entity.getPot_passing();
        this.pot_oRebounding = entity.getPot_oRebounding();
        this.pot_dRebounding = entity.getPot_dRebounding();
        this.pot_postDefense = entity.getPot_postDefense();
        this.pot_perimeterDefense = entity.getPot_perimeterDefense();
        this.pot_stealing = entity.getPot_stealing();
        this.pot_blocking = entity.getPot_blocking();
        this.currentRating = entity.getCurrentRating();
        this.futureRating = entity.getFutureRating();
        this.overallRating = entity.getOverallRating();
        this.overallPotential = entity.getOverallPotential();
        this.championships = entity.getChampionships();
        this.playerOfGame = entity.getPlayerOfGame();
        this.playerOfWeek = entity.getPlayerOfWeek();
        this.playerOfMonth = entity.getPlayerOfMonth();
        this.contract1 = entity.getContract1();
        this.contract2 = entity.getContract2();
        this.contract3 = entity.getContract3();
        this.contract4 = entity.getContract4();
        this.contract5 = entity.getContract5();

        List<SeasonStats> stats = entity.getSeasonStats();
        if (!stats.isEmpty()) {
            SeasonStats lastStat = stats.get(stats.size() - 1);
            this.seasonStats.add(new SeasonStatsDTO(lastStat));
        }
    }

    public double getPointsPerGame() {
        if (seasonStats.isEmpty()) {
            return 0.0;
        }
        return seasonStats.get(seasonStats.size() - 1).getPpg();
    }

    public double getRebsPerGame() {
        if (seasonStats.isEmpty()) {
            return 0.0;
        }
        return seasonStats.get(seasonStats.size() - 1).getRpg();
    }

    public double getAssistsPerGame() {
        if (seasonStats.isEmpty()) {
            return 0.0;
        }
        return seasonStats.get(seasonStats.size() - 1).getApg();
    }

    public double getPlayerFgPct() {
        if (seasonStats.isEmpty()) {
            return 0.0;
        }
        return seasonStats.get(seasonStats.size() - 1).getFgPct() ;
    }

    public Double getPlayerTs() {
        if (seasonStats.isEmpty()) {
            return 0.0;
        }
            double totalPointsScored = (seasonStats.get(seasonStats.size() - 1).getFgm()
                    + 0.5 * (seasonStats.get(seasonStats.size() - 1).getFtm()));

            double totalShotsAttempted = (seasonStats.get(seasonStats.size() - 1).getFga()
                    + 0.44 * (seasonStats.get(seasonStats.size() - 1).getFta()));

            return totalPointsScored / totalShotsAttempted;

    }

    public Integer getContractLength() {
        int years = 0;
        years += (this.contract1 > 0) ? 1 : 0;
        years += (this.contract2 > 0) ? 1 : 0;
        years += (this.contract3 > 0) ? 1 : 0;
        years += (this.contract4 > 0) ? 1 : 0;
        years += (this.contract5 > 0) ? 1 : 0;
        return years;

    }

    public Integer getOverallOffense() {
        return ( (insideScoring * 2) + (jumpShot * 2) + freeThrowShot + threePointShot +
                passing + handling + offensiveRebounding) / 7;
    }

    public Integer getOverallDefense() {
        return (defensiveRebounding + ( postDefense * 2) + (perimeterDefense * 2) + stealing + shotBlocking) / 5;
    }

    public Integer getOverallPhysical() {
        return (quickness +  strength  + jumping +  stamina ) / 4;
    }

    public Integer getOverallMental() {
        return (greed + winner + loyalty + happiness)  / 4;
    }

}
