export interface DamageFromAndTo {
  to: SeparateDamageRelations;
  from: SeparateDamageRelations;
}

export interface SeparateDamageRelations {
  double_damage?: Damage[];
  half_damage?: Damage[];
  no_damage?: Damage[];
}

export interface Damage {
  damageValue: string;
  name: string;
  url: string;
}