package com.nbaliga.dto;

import com.nbaliga.entities.SeasonInfo;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SeasonInfoDTO implements Serializable {

    private Integer season;
    private Integer seasonDay;

    public SeasonInfoDTO(SeasonInfo entity) {
        season = entity.getSeason();
        seasonDay = entity.getSeasonDay();
    }

}
