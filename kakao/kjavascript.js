function airpod() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url:
								'https://nory.cc/ko/social/kakaotalk/gifticon/assets/img/meme1.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// sleep(500);
	// // .then(() => window.location.reload())
	// // .then(() => setItem('data', response.data));
	// window.location.reload();
	// setItem('data', response.data);
}

function bera() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/bera_1.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function chk() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url:
								'https://nory.cc/ko/social/kakaotalk/gifticon/assets/img/meme4.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function gang() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/hongsam2.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function gift() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/giftcard2.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function gs25() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/gs_1.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function iphone() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/iphone_mini4.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function lol() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url:
								'https://nory.cc/ko/social/kakaotalk/gifticon/assets/img/meme3.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function mas() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/gift_0426_2.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function mom() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/moms.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// window.location.reload();
	// setItem('data', response.data);
}

function star() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/starbucks2.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// location.href = location.href;
	// setItem('data', response.data);
}
function bebe() {
	Kakao.init('f528a75dfb4a7b0e0063aaddf859207d');
	Kakao.Auth.login({
		success: function (response) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (response) {
					let nickname = response['properties']['nickname'];
					Kakao.Link.sendCustom({
						templateId: 59297,
						templateArgs: {
							title: nickname + '님이 선물과 메시지를 보냈습니다',
							desc: '자세한 내용은 선물함에서 확인해주세요.',
							img_url: 'https://hwanggu1.github.io/nion-cdn/bbae_4_1.png',
							height: '200',
							width: '700',
							btn_url: 'https://gift.kakao.com/giftbox',
						},
					});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
	setTimeout(function () {
		location.reload();
		setItem('data', response.data);
	}, 500);
	// location.href = location.href;
	// setItem('data', response.data);
}