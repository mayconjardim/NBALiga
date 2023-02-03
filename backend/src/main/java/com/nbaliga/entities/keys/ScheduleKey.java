package com.nbaliga.entities.keys;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ScheduleKey implements Serializable {

    private Integer day;
    private String home;
    private String away;

}
