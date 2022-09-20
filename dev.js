var isAnSpoilerVisible = false; // deviendra le spoiler visible
        var spoilers = [
            document.getElementById('spoiler1'),
            document.getElementById('spoiler2'),
            document.getElementById('spoiler3'),
            

        ];
        var toggleBtn = [
            document.getElementById('toggle1'),
            document.getElementById('toggle2'),
            document.getElementById('toggle3'),
            
        ];

        for(let i=0; i<spoilers.length;i++) {
            toggleBtn[i].addEventListener('click', function() {
                if(spoilers[i].classList.contains('hidden')) {
                    if(isAnSpoilerVisible) {
                        isAnSpoilerVisible.classList.add('hidden');
                    }
                    spoilers[i].classList.remove('hidden');
                    isAnSpoilerVisible = spoilers[i];
                } else {
                    spoilers[i].classList.add('hidden');
                    isAnSpoilerVisible = false;
                }
            })
        }