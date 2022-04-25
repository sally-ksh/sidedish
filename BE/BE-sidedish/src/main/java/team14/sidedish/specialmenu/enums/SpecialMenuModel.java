package team14.sidedish.specialmenu.enums;

import java.util.Arrays;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SpecialMenuModel {
	ONE("풍성한 고기 반찬", 1),
	TWO("편리한 반찬 세트", 2),
	THREE("맛있는 제철 요리", 3),
	FOUR("우리아이 영양 반찬", 4);

	private final String title;
	private final int id;

	public static SpecialMenuModel from(int id) {
		return Arrays.stream(values())
			.filter(it -> it.id == id)
			.findAny()
			.orElseThrow(() -> new IllegalArgumentException("error of specialMenuModel param"));
	}


}
