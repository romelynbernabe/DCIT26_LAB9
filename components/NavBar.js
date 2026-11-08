import { View, Text, Pressable } from 'react-native';

const navItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔍', label: 'Search' },
  { icon: '👤', label: 'Profile' },
  { icon: '⚙️', label: 'Settings' },
];

function NavItem({ icon, label, selected, onPress }) {
  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      className={`flex-1 items-center py-2 ${selected ? 'bg-sky-50' : ''}`}
      onPress={onPress}
    >
      <Text className="text-xl">{icon}</Text>
      <Text className={selected ? 'text-sky-700 font-bold text-xs' : 'text-slate-500 text-xs'}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function NavBar({ selectedTab, onSelectTab }) {
  return (
    <View accessibilityRole="tablist" className="flex-row border-t border-slate-200 bg-white">
      {navItems.map(({ icon, label }) => (
        <NavItem
          key={label}
          icon={icon}
          label={label}
          selected={selectedTab === label}
          onPress={() => onSelectTab(label)}
        />
      ))}
    </View>
  );
}
