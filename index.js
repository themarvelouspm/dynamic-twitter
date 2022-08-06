var users = { user1 : {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
},
user2 : {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
}};

function showTimeline(){
        
    for (var value in users) {
        var selectedUser = users[value];
    
        console.log(selectedUser);
    
    
    
        //Header only
            var headerContainer = document.querySelector('.header-container');
            var fullName = document.createElement('h5');
            fullName.innerHTML = `${selectedUser.displayName} <img src="verified.png" height="12" width="12">`;
    
            var userName = document.createElement('p');
            userName.textContent = selectedUser.userName;
    
            var coverPhoto = document.createElement('div');
            coverPhoto.style.cssText = `background-image: url(${selectedUser.coverPhotoURL})`;
    
    
            //Profile
            var profilePic = document.createElement("div");
            profilePic.innerHTML = `
            <img src =${selectedUser.avatarURL}>
            `;
    
            var tweetContainer = document.querySelector(".tweet-container");
        
                        
            var tweetData = selectedUser.tweets.map(function(item){
                return item;
            });
    
                tweetData.forEach(function(tweet){
    
                var tweetDiv = document.createElement('div');
                tweetDiv.classList.add('tweet-div');
                tweetDiv.innerHTML = `
                <div><img class="pic-in-tweet" src =${selectedUser.avatarURL}>
                </div>
                <div>
                <a href="http://127.0.0.1:5500/dynamic%20twitter.html?user=${value}"><p><strong>${fullName.innerHTML}</strong></a>  <span class="user-name">${userName.textContent}</span> - <span class="time-stamp">${tweet.timestamp}</span></p>
                <p>${tweet.text}</p>
                </div>
                `;
                tweetContainer.appendChild(tweetDiv);
            });
        }
    }