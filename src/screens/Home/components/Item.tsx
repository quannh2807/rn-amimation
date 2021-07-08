import React, {memo} from 'react';
import {Image, StyleSheet, Text, View, Animated} from 'react-native';

interface ItemProps {
	scale: any;
	opacity: any;
	scrollY?: any;
}

export const Item = memo(function Item(props: ItemProps) {
	const {scale, opacity, scrollY} = props;

	return (
		<Animated.View
			style={[
				styles.container,
				{
					transform: [
						{
							scale: scale
						},
					],
					opacity,
				},
			]}>
			<View style={styles.left}>
				<Image
					source={{
						uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABg1BMVEX1wAL////7Yh4wMDDxyaXktpL1vgDlPQz3WhrrwJz0uwD1wQD5wwDvxqP1xQD9xgD50Krxyqv87cQKCgr7VwD1wSv//vgYITIfJCjsvJf7WQD99dz++OYpKzEqLC0lKCvjtJf524j75a0iJzH40mb3Uxr7XhX2yT73z1v2xCD65KYPHTKuk3v2xyv41G/76bj635UQGyLWq4r64Jy6lBhkVSgfHx/oQg7878n3zEv53Y3513v3zlP98dOMciI8OS3LoBOfgB5NRCx9bF3Bo4dtXE/OpYbyx4dCPTnyxnc6NzXmt4PouHrzxWi4lHngsAv2kRrmTSH+6+D8v6dWSit3YyWxjRqTdyDlt0NZUU6fh3JVSitwXid/aCRiUyk5OD+Mc2DuvE/xvTqxlG4AEShhVEldXV2enp7e3t5XV1e7u7v0sQDysEHyogrsdgzjJgDqd1fpZT/lqYTskW32hR7lmXT2ciXmgFv7rn36nHb6bS77iFf6fEX6iFr90b796+P8tJleTb0oAAAQwUlEQVR4nNWd+0PTVhvHk7YESEpbWO0FaAqUAkUKtoDcVIQCKu8G3oYv3eVFN7e9Y8imqC8o6J/+nnPSpGmuJ8mTtHx/2WS2nM+e27k8OWFY35UaXp6bXl2bXZksl0oCI5RK5cmV2bXV6bnl4ZT/v57x88uHl6fXJhmO5zkkplX4R+g/MJNr08vDfg7CL8LhudEVgsbYiYCujM75hekH4fDYeElvNDtOjpn1hRKaMDUwWqaxnIk1y7MD0KEJSpiam+J4d3QKJc+Nz4FCAhIiPG90iikRJNywoAjvzsLgNcQzo0NAI4MhHCt5dE69OH5yDGRsAITDq6DmU0FyqwDJ1TPh0LhPfBLjuGdn9Ug4NAXunhpGfsojoydC3/kgGD0QDk/xvuNJ4qc8xKNrwtRaAPaTxfFrrmcBbgmnmeD4CCMzHSjh3VKwfISxdDc4wrWgArBV/FpAhAMBO2hTHDMQBOFsewwoiZ/1nfCu0C4DSuIEp9HokHC1nQaUxK/6SJiabK8BJXGTjmqjE8LldrMpWvaH8Fb7PVQWf8sHwtRK5wAixDvUnkpLmCp3Qgg2xZVpESkJh9pNZCDKNRUd4UAneagsnm6CQ0U43YmACJFquUFDON+ZgAhxHoawg6qEVjRVw56wAyZq5qKYwtkSdjQgDaIdYcfGoCzbWLQh7NAsqpZdRrUmHOt8QIRofb5hSbh8HQARouVSw4pwqLOmoubirCZwFoSpdg/cgSym4RaE5XYP24HKbgjvXBcfxeLuOCfs4Lmakcznb2aEHblespLpWsqEcPg6uagkzuQEzoTwOmUZWSbZxphw9PqZEBlxlJ7wmsxltDKe2xgRpoR2j9WlBKPCb0Q4fh19FIsbpyOcu54+isUb9MMZELZ7mJ5EQ7h2XX0Ui9MfhOsI715fH8XidQeoOsJSu8foUSU7wunr7KNYnHbbRkN4nVa9ZkpZEvo3XROi8XgUKY7/4eeUQjt5ayUc9ivNROP8wr3FzfX1zec/3ju4zyFM3yj5YQvCKX9MKMT3vy+kCzkxLIpiroD+dfPeAucXJDdlTjjkjwmF6L2buXCLRES5eOATJD9kSnjHh1+HAIXn6bCBcoX04gIT9+E33jEj9MmE8Z8LRoAEMh1+sR+PQv/GlrKvJvTHhPENQwvKKtxcvB+FZrxjTOiPCQXO1IKKITcXgAuIOhJVhP4sC6MbdoQo76R3DwRIO6rTaZPQp+21+LpoSygxQvqqqiY2CVehCcn8Jf5vyyhUM64vwOUc1SqqSQgLKESj918srofXD2lM2GB8fh+sdnB6wjFQwqiwsXuTTGIyu7SEKOfc/J4HYuTGdISQe8DR+EGuINkuU61n6BFRXt0ACseylhByaR/f/0EOvspWotcJYTic3twHMaNS9WVCwN2Z+EJanoVm6olIopZ3hJhLL0AgKrlGJgQEPLgpD1Y8TEQikWrFEWE4fPMABLGVcA6MML6hAIYrVQQYSWxTp1MZ8T5ALHJzLYRT3r9RUnyhCZivYRO6MGI4B5EVptSEKSgTRvdVBb7SSwAdRyIi/BHAT7mUihDMSaObzaWubMJIpM9ZOg3D+GnDTRlQJ21ZKVVGGoCRxIxTRBAjTjUJoZxUEFQ5RXwtmxAhvnaabHKM9+WU5KaEEKotIbqgMmFmK9KUw7KPCj+Am0rNCwxkuY//VFARJlSEiRmH+bSwARCIawoh1Jw0vmiUZxr51JkVcz8BBGJZJgTbB47/2CRscVKsh45CMbcIQEjWwQzkwkm9YyFqACN9ohPE3A8QFXGsQQi2QRO9r2QacTuhRaw6WkY9hyAcbxB6/6qGBEbx0syMjjCx5SDbgBREcpjIgG5Bxb+XEeUZWwuig4QKkmlIJxgDua5oFkRxV2dCZ4gQ1UKauDGwZ4bRQoOwZkToADG9AEI4SggnAb5KVvyehGgQho1YzNBl1PQ+yHgmCSHkJlt0X1oeSmtfI8SdPNUO8TrMfhSHCWHPfeM/k1wj9pkQRnqrD/WrRR00TKIhNZ9hB2A3SkmukTZojAm7urY1hVE81E3pICbeWNwAIrwFu9l95z9ogPkjK8JsXROM+WxNk4EKAsxZFDePCIGPnL7Dq12zRCMRdmV3HrYYrVLN1lsQoZwUz2oY6IbnR/0oqnTT7lZCxHhUUZkxs5fN7qntCuWkeHnBwLYivnoQSdQz4YppomkQIjMeNs2YP8p2ZVUZSNyEO91nGbBtNqwH/RgCLSJMAWVCHI15GUl8mMU/UYKxcAB3zJZiAM+2SxECmKhXXpuGYZOwK9tVkz0zUyU/2AtLzIVXYGPihxjAYpHob1CYzNk0hNhVt6VwzNSzEjP5M3JasA5JboCBm3c/kgETdfNi0UJIGDN5xU2xGR9mRGTRf0E1LnBzzDwU4Y3+JsYWRRzKjNVaJi9WdhTXredr2a4RKD/l5hmwlcWjfnMsC0LMeLRb2c42wxMHJZQRuVEG7OCQis+IEEFl917vtP5oBCgSuTVmFuabWpzUKSGxnIbwJdC4ZpkVoG/6zhuhTo+AxrXCQK1/oQm/BQrESQZqWkqZaKgJoVJNmYGqrZ1KWAIj7FQvhXt+5GWHZho4eawWWoFVC0DRAVITwnkX2De5nrUZCmzqDZdpaN2UjhDOSUtg9VBe4APZEGxUZUDCkoRgvkVDTwi2eMJzGsBTC6lg7HgiJEuMkUdwnfsrzDjYdzWq/pa1EW0I9zAgVLXHGodbH2JhxBmDs1Fqwmodre8hiz1aH8I+cfgq0j+z5YFwrz7S9RLy4RK0xgfbp2no5S91820oW8L6L8BzGW6ege3RZ5jogcVWoh1htgZy9KsSNwe5X0oUXTA/WbMnPAQnHIDc8yaKLqQ9EBagCfkh2HMLBhP+alkurOPwV3AbpoDPngjhllvC7B44IQN/foi81OJcxobwNUyTiUpl+DPg6P20UT8UFeFO5uY+LCE5AwY+xxeYXN6qXlgQZmt5EaD5WS3uFngvBuk3yZgZMZFI9GWz2v1tWdUMSFepWqQXA7xcbBSMjZhIVGfqtVrtqL5jCJndFmG62VTih6B7ohipybSypUVEeEfhSiaPlcmEa3rI7F4lDB2GUk8UaF8bVhR3RfVq+GYOK+pWqHzmcK+VMVsVw+Fd6PsHJsF7E7HiP+XC4m6v6mmLvrqoa9gTM+Ej1YlTthoWw4V70GE4Ct1fSkR6ocXwViIh5ZatWkZpLBFv376tsGbysrNms3u4tw2ujaahRn8p+JUtUfzor1g5nKmObM3UxKZ7it/89vufv//2jcKYRxFZ39vZqZMeKaiGxKb4YeA+74biLwqSH1YqmYwq+sTdP8iTSH/8V/3DDJLUkVnYAL8GBLpXX9Z+8xnEltBTniA3fvYCqGu2KaVXH3oRrGpoV+v2nwrhn7cN/jt4nmk+bwEfiMZGvP2NLCNAeBM2n5mBv6NNbvd2ovQL8CgsgT+7pkhQP0tKp9wm+EU8qmfX4K9FjvLrzqxYWOfhrxpqPn8IvZOBFGUWKS81IUovMuCA6mdIfbl8J76RpvXUXHojDn/pV+O+VuBnudWK7z9P092+8xzmKgyNWp7l9sFNGXLFSdiWEd8uBH/bF1bL8/gs5AmUSlFmI2wdjsC3J6kkXyoMfi9Gq4SosCGa2lFMhw98uyZScy+Gf5cHC9HoQevqVxZaBfvHxyhXCvtwP41ON/qrtZZFBrJePpM52hm54R+f7n4an24UJLrRH0lEtmq7lQx52FlEeLs1vIkxcsO/X6pcSqfcEwW9W6MSIuzDZxnV+vYuWgw+3K7vSPsXfhJOslpC8CVUU7jTpq+PQCYivar9Uh8JDe76gt5UVIn0EvU1pN7z9pOQ1ROC37mnSOqWCpRQdZmw7/cmMs1+sAAJDe9NZGf9Qmx2vAVFqH5Jgu/3lzKanr5ACE3uL/XpDlqGKQVOaHIHrQ9GxE/z3nj5wPT88NuXrwQG6JFflUzvEYY1oiDEYsd/PYj0tzZltp6Qjox0ffvXcSwGS2l6FzSkEYUYc/Jm6fRvXc+p7gy49+/TpTcnDCCkxX3eQHeyCxjvbOm0u7v7H905qZ7wH/T3MCSHTAnx663uZAfZGxZi3MmbYrFnCQ28e8mesEv6iz3F4ocTHoLR8l59z2eJQkw4+YDwkIp44KdZW8K32Nbd0kcQJOMV0vrdCN7eb4FTy1kPGSsWHnj3O1vCj+TvyR8q9pydePRW6/dbeHhHCfLOx6GiwtcTIt73RHugryXsfUKcNKR8rqcYeuzBW+3eUeL6DEOI8Srz9YSQiBFP39oQvidOKn1AYSy+OXbLaPueGXcXCgux4w+K+UKyJCNaE8omlKVAfnDHSPGuIBc7NoRPi6cY8Z0VYe/Hpgk1kCjrOGeked+T8223GP+mqMdTjKhJp62EUiJd0nxOZUengzHA0f/I2XvXBOFxwz+1fA0jampiK+FSt86EasjimbOZDuV71xyd08SOQ0VjPCxSE7uf9JkRkiDsLhp+tpFXTxyYkfbdeQ7efyjEHlvwyX7avZQ1Iux9291t5KOtkMXH9NFI/f5D6ndYCgzJMKYjVBBP3yV0hI0kYwEoMRY/lCgR6d9hSTt5kwCtBthEfPJWQ/j+CQUgYSxe0DWdOnkPKeWdrTEEaDM+BRExvstiQ/Yh6/W+/djgswXEjMULqlh09C5Zqo232BkNoJxuyBLp73fv3737+M/Sqfwj4ySjQzyjQXT2PmCK5gXhmGp4IbloNChPVX9Yovo/hP8nHdv6qXEQWhDav5c7dkY7PpUZW0T/+Z43dkZ0/l5u+3erxz5QDxCPcUmDR20/6eOctRHdvFvdLtsIvKMhEkiZcskZHv7siTWhSZaxIbReDQsnTkfpSR+s3dSo1NsTskNWfho7CxIw1MNbGJEbsqCwIrRMqEKggKGex+ZGlLq7XBGy06aIwnGgTmrlprx238IJoTli7HHAhD0uAe0ITcti7E2wgKbZ1LwQUhKyq8aIsYABQyHjmRu/agdgS2hsxcDDMBS6MLKhrQVpCNl5A8TAwxC5qcHclJ+3Hz4FoVG6CbgaEkJ9vbBLMtSE7JgOMeBqSKSbffNj9kOnJGSXNbObNoQhMqKGkDNbL7khZIc0hMFOShuEmkC0mqo5J2RTZbUZ2xCGmkDkyhaTbVeELLuiCsbgqyGWqiLy5utB94SqwijwtBsYoGpWRIoy6Iaw+dR3W8JQtYLiLBcTHgjZ4UYwtqHeE0JpasqVTXbVAAhZdpR4qrMtGjhCEoj8qLMhOyRk7wrIjFxbAMkakRN0R6DAhCw7y7el3mP1CPys4/E6J2QH2hSGoVDy2EmKcU/Isv9LTrSBbyJ57mawrgjZpxfJwAGTF09djdUdIcs+GxwMlG9w8JnLkbolZFPnAboqclDaaSgcIXLVTwExTiQ/uXNQr4SI8XMAjBPJzx74PBKy7JXfjIjvytsQPRIiO176yDiRvPRkPxBCxHieHPQDcmIwef7F+/AACFFefXYBbsiJ5MUz1/lTLRBCljgrIOREcvDcs3s2BEWIDfkJBnIimbz0mF3UgiNE+vLs06BHSGS9yysQ75QFSoiUujq/cJt4UGoJncPisfCEWE+fXYaQwzrBnECuGbp8BhV7avlBiPXl6vxzMomsacc5gSyXTH4+vwIoDIbyi5Do6dXXy4sJDIpIJzRgE4MYbfDi8uuVH6ZT5CshUSr19Orq6/vzy88XFxeEDv3z8+X5+69XV09T0FGn1/8B+HhTpvXiR/AAAAAASUVORK5CYII=',
					}}
					resizeMode="contain"
					style={{height: '100%', width: '100%'}}
				/>
			</View>

			<View style={styles.right}>
				<Text style={styles.title}>Lorem ipsum dolor sit.</Text>
				<Text style={styles.subTitle}>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</Text>
			</View>
		</Animated.View>
	);
});

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',

		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 8,
		width: '100%',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},

	left: {
		borderRadius: 35,
		width: 70,
		height: 70,
		backgroundColor: '#3f3f3f2b',
	},

	right: {
		flex: 1,
		paddingLeft: 5,
	},
	title: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'bold',
		paddingVertical: 5,
	},
	subTitle: {
		color: '#000',
		fontSize: 14,
	},
});
