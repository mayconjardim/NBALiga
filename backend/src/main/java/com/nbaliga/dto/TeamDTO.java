package com.nbaliga.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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

}
