package com.nbaliga.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nbaliga.entities.Player;
import com.nbaliga.entities.SeasonStats;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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
    private Integer overallRating;
    private Integer overallPotential;
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

    @JsonIgnore
    private List<SeasonStatsDTO> seasonStats = new ArrayList<>();

    private List<PlayerAwardsDTO> awards = new ArrayList<>();

    public PlayerDTO(Player entity) {
        id = entity.getId();
        firstName = entity.getFirstName();
        lastName = entity.getLastName();
        name = entity.getName();
        height = entity.getHeight();
        weight = entity.getWeight();
        age = entity.getAge();
        birthMonth = entity.getBirthMonth();
        birthDay = entity.getBirthDay();
        birthYear = entity.getBirthYear();
        currentLeague = entity.getCurrentLeague();
        currentLeagueId = entity.getCurrentLeagueId();
        currentTeam = entity.getCurrentTeam();
        currentTeamId = entity.getCurrentTeamId();
        contractTeam = entity.getContractTeam();
        contractTeamId = entity.getContractTeamId();
        injury = entity.getInjury();
        timeInjured = entity.getTimeInjured();
        inactive = entity.getInactive();
        positionNumber = entity.getPositionNumber();
        experience = entity.getExperience();
        college = entity.getCollege();
        city = entity.getCity();
        state = entity.getState();
        greed = entity.getGreed();
        happiness = entity.getHappiness();
        loyalty = entity.getLoyalty();
        winner = entity.getWinner();
        insideScoring = entity.getInsideScoring();
        jumpShot = entity.getJumpShot();
        freeThrowShot = entity.getFreeThrowShot();
        threePointShot = entity.getThreePointShot();
        handling = entity.getHandling();
        passing = entity.getPassing();
        offensiveRebounding = entity.getOffensiveRebounding();
        defensiveRebounding = entity.getDefensiveRebounding();
        postDefense = entity.getPostDefense();
        perimeterDefense = entity.getPerimeterDefense();
        stealing = entity.getStealing();
        shotBlocking = entity.getShotBlocking();
        quickness = entity.getQuickness();
        strength = entity.getStrength();
        stamina = entity.getStamina();
        jumping = entity.getJumping();
        pot_inside = entity.getPot_inside();
        pot_jumpShot = entity.getPot_jumpShot();
        pot_freeThrow = entity.getPot_freeThrow();
        pot_3pShot = entity.getPot_3pShot();
        pot_handling = entity.getPot_handling();
        pot_passing = entity.getPot_passing();
        pot_oRebounding = entity.getPot_oRebounding();
        pot_dRebounding = entity.getPot_dRebounding();
        pot_postDefense = entity.getPot_postDefense();
        pot_perimeterDefense = entity.getPot_perimeterDefense();
        pot_stealing = entity.getPot_stealing();
        pot_blocking = entity.getPot_blocking();
        currentRating = entity.getCurrentRating();
        futureRating = entity.getFutureRating();
        overallRating = entity.getOverallRating();
        overallPotential = entity.getOverallPotential();
        championships = entity.getChampionships();
        playerOfGame = entity.getPlayerOfGame();
        playerOfWeek = entity.getPlayerOfWeek();
        playerOfMonth = entity.getPlayerOfMonth();
        contract1 = entity.getContract1();
        contract2 = entity.getContract2();
        contract3 = entity.getContract3();
        contract4 = entity.getContract4();
        contract5 = entity.getContract5();

        List<SeasonStats> stats = entity.getSeasonStats();
        if (!stats.isEmpty()) {
            SeasonStats lastStat = stats.get(stats.size() - 1);
            seasonStats.add(new SeasonStatsDTO(lastStat));
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
        years += (contract1 > 0) ? 1 : 0;
        years += (contract2 > 0) ? 1 : 0;
        years += (contract3 > 0) ? 1 : 0;
        years += (contract4 > 0) ? 1 : 0;
        years += (contract5 > 0) ? 1 : 0;
        return years;

    }

    public String getPositionName() {
        switch (positionNumber) {
            case 5:
                return "Point Guard";
            case 4:
                return "Shooting Guard";
            case 3:
                return "Small Forward";
            case 2:
                return "Power Forward";
            default:
                return "Center";
        }
    }

    public String getPlayerTeam() {
        if (Objects.equals(currentTeam, "FA")) {
            return "Free Agent";
        } else
        return currentTeam;
    }

    public String getExpiring() {
        if (contract1 > 0 && contract2 == 0) {
            return "Expiring";
        } else
            return "Contract";
    }

    public Integer getOverallOffense() {
        return ( (insideScoring * 2) + (jumpShot * 2) + freeThrowShot + threePointShot +
                passing + handling + offensiveRebounding) / 7;
    }

    public Integer getOverallDefense() {
        return (defensiveRebounding + ( postDefense * 2) + (perimeterDefense * 2) + stealing + shotBlocking) / 6;
    }

    public Integer getOverallPhysical() {
        return (quickness +  strength  + jumping +  stamina ) / 4;
    }

    public Integer getOverallMental() {
        return (greed + winner + loyalty + happiness)  / 4;
    }

}
