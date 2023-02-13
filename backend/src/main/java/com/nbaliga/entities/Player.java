package com.nbaliga.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Player implements Serializable {

    @Id
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

    @OneToMany(mappedBy = "id", fetch = FetchType.LAZY)
    private List<SeasonStats> seasonStats = new ArrayList<>();


}
