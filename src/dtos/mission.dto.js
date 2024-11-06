export const bodyToMission = (body, store_id) => {
  const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); //데드라인 현재 시간으로부터 일주일 뒤
  return {
    store_id: store_id,
    reward: body.reward,
    deadline: deadline,
    mission_spec: body.mission_spec,
  };
};

export const bodyToMember_mission = (body) => {
  return {
    member_id: body.member_id,
    mission_id: body.mission_id,
  };
};

export const responseFromMission = (mission) => {
  return {
    mission,
  };
};