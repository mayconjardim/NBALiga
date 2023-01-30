package com.nbaliga.dto;

import com.nbaliga.entities.Player;
import com.nbaliga.entities.Team;
import lombok.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class TeamDTO implements Serializable {

    private Long id;
    private Integer league;
    private String cityName;
    private String name;
    private String city;
    private String state;
    private String conference;
    private String division;
    private Integer teamRating;
    private Integer championships;
    private Integer playoffs;
    private Integer totalSalary;
    private Integer numPlayers;
    private Integer oldWinRating;
    private Integer streak;
    private Integer homeWins;
    private Integer homeLosses;
    private Integer roadWins;
    private Integer roadLosses;
    private Double winPct;
    private Integer totalWins;
    private Integer totalLosses;
    private Integer playoffWins;
    private Integer playoffLosses;
    private Integer finalsAppearances;
    private Integer points;
    private Integer allowedPoints;
    private Integer steals;
    private Integer allowedSteals;
    private Integer rebounds;
    private Integer allowedRebounds;
    private Integer assists;
    private Integer allowedAssists;
    private Integer blocks;
    private Integer allowedBlocks;
    private Integer turnovers;
    private Integer allowedTurnovers;
    private Integer fga;
    private Integer fgm;
    private Integer allowedFga;
    private Integer allowedFgm;
    private Integer threePa;
    private Integer threePm;
    private Integer allowed3pa;
    private Integer allowed3pm;
    private Integer ftm;
    private Integer fta;
    private Integer allowedFtm;
    private Integer allowedFta;
    private Integer lastPlayoffYear;
    private Boolean isHuman;
    private Double cutSalary;
    private Double cutSalary2;
    private Double cutSalary3;
    private Double cutSalary4;
    private Double cutSalary5;
    private Double cutSalary6;
    private Double cutSalary7;
    private Double cutSalary8;
    private Integer usedMidException;
    private Integer usedLowException;
    private Double gb;
    private Double confGb;
    private Integer divRank;
    private Integer confRank;
    private String arenaName;

    public TeamDTO(Team entity) {
        id = entity.getId();
        league = entity.getLeague();
        cityName = entity.getCityName();
        name = entity.getName();
        city = entity.getCity();
        state = entity.getState();
        conference = entity.getConference();
        division = entity.getDivision();
        teamRating = entity.getTeamRating();
        championships = entity.getChampionships();
        playoffs = entity.getPlayoffs();
        totalSalary = entity.getTotalSalary();
        numPlayers = entity.getNumPlayers();
        oldWinRating = entity.getOldWinRating();
        streak = entity.getStreak();
        homeWins = entity.getHomeWins();
        homeLosses = entity.getHomeLosses();
        roadWins = entity.getRoadWins();
        roadLosses = entity.getRoadLosses();
        winPct = entity.getWinPct();
        totalWins = entity.getTotalWins();
        totalLosses = entity.getTotalLosses();
        playoffWins = entity.getPlayoffWins();
        playoffLosses = entity.getPlayoffLosses();
        finalsAppearances = entity.getFinalsAppearances();
        points = entity.getPoints();
        allowedPoints = entity.getAllowedPoints();
        steals = entity.getSteals();
        allowedSteals = entity.getAllowedSteals();
        rebounds = entity.getRebounds();
        allowedRebounds = entity.getAllowedRebounds();
        assists = entity.getAssists();
        allowedAssists = entity.getAllowedAssists();
        blocks = entity.getBlocks();
        allowedBlocks = entity.getAllowedBlocks();
        turnovers = entity.getTurnovers();
        allowedTurnovers = entity.getAllowedTurnovers();
        fga = entity.getFga();
        fgm = entity.getFgm();
        allowedFga = entity.getAllowedFga();
        allowedFgm = entity.getAllowedFgm();
        threePa = entity.getThreePa();
        threePm = entity.getThreePm();
        allowed3pa = entity.getAllowed3pa();
        allowed3pm = entity.getAllowed3pm();
        ftm = entity.getFtm();
        fta = entity.getFta();
        allowedFtm = entity.getAllowedFtm();
        allowedFta = entity.getAllowedFta();
        lastPlayoffYear = entity.getLastPlayoffYear();
        isHuman = entity.getIsHuman();
        cutSalary = entity.getCutSalary();
        cutSalary2 = entity.getCutSalary2();
        cutSalary3 = entity.getCutSalary3();
        cutSalary4 = entity.getCutSalary4();
        cutSalary5 = entity.getCutSalary5();
        cutSalary6 = entity.getCutSalary6();
        cutSalary7 = entity.getCutSalary7();
        cutSalary8 = entity.getCutSalary8();
        usedMidException = entity.getUsedMidException();
        usedLowException = entity.getUsedLowException();
        gb = entity.getGb();
        confGb = entity.getConfGb();
        divRank = entity.getDivRank();
        confRank = entity.getConfRank();
        arenaName = entity.getArenaName();
    }

    private Set<PlayerDTO> players = new HashSet<>();

    public TeamDTO(Team entity, Set<Player> players) {
        this(entity);
        players.forEach(play -> this.players.add(new PlayerDTO(play)));
    }


}
